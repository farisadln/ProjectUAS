import * as firebase from 'firebase/app';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';




@Injectable()
export class MyFireService {

  constructor(private user: UserService){

  }

  getUserFromDatabase(uid){

    const ref = firebase.database().ref('users/' + uid);
    return ref.once('value')
      .then(snapshot => snapshot.val());

  }

  generateRandomNme(){
    let text ="";
    const  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i=0; i < 5; i++){
      text += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return text;
  }

  uploadFile(file){
    const  fileName = this.generateRandomNme();
    const fileRef = firebase.storage().ref().child('uploads/' + file.name);
    const uploadTask = fileRef.put(file);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', snapshot => {
        }, error => {
        reject(error);

        }, () => {
          const  fileUrl = uploadTask.snapshot.downloadURL;
          resolve({fileName, fileUrl});
        }
      );
    })


  }



  handleImageUpload(data){

    const personalPostDetails = {
      fileUrl: data.fileUrl,
      name: data.fileName,
      creationDate: new Date().toString()
    };

    const newPersonalPostKey = firebase.database().ref().child('uploads/').push().key;
    const updates = {};


    const users = this.user.getProfile();
    updates['/uploads/'  + users.uid + "/" + newPersonalPostKey ] = personalPostDetails;

    return firebase.database().ref().update(updates);
  }
  getUserPostsRef(uid) {
    return firebase.database().ref('myposts').child(uid);
  }

  handleFavoriteClicked(imageData) {

    const uid = firebase.auth().currentUser.uid;

    const updates = {};

    updates['/images/' + imageData.name + "/oldFavoriteCount"] = imageData.favoriteCount;
    updates['/images/' + imageData.name + "/favoriteCount"] = imageData.favoriteCount + 1;
    updates['/favorites/' + uid + "/" + imageData.name] = imageData;

    return firebase.database().ref().update(updates);

  }

  followUser(uploadedByUser) {
    const uid = firebase.auth().currentUser.uid;

    const updates = {};
    updates['/follow/' + uid + "/" + uploadedByUser.uid] = true;

    return firebase.database().ref().update(updates);

  }

}
