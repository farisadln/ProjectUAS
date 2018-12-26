import {Router, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {FollowingComponent} from './following/following.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {MyPostsComponent} from './my-posts/my-posts.component';
import {NgModule} from '@angular/core';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LoginComponent} from './auth/login/login.component';
import {RouteGuard} from './auth/route-guard';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {DetailsUploadComponent} from './upload/details-upload/details-upload.component';
import {ListUploadComponent} from './upload/list-upload/list-upload.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'allposts', component: AllPostsComponent, canActivate:[RouteGuard] },
  {path: 'following', component: FollowingComponent , canActivate:[RouteGuard] },
  {path: 'favorites', component: FavoritesComponent , canActivate:[RouteGuard] },
  {path: 'myposts', component: MyPostsComponent, canActivate:[RouteGuard] },
  {path: 'form-upload', component: FormUploadComponent, canActivate:[RouteGuard]},
  {path: 'list-upload', component: ListUploadComponent, canActivate:[RouteGuard]},
  {path: 'details-upload', component: DetailsUploadComponent, canActivate:[RouteGuard]},
  {path: 'singup', component: SignUpComponent },
  {path: 'login', component: LoginComponent }
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
  
}
