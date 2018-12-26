export class FileUpload {

    key: string;
    name: string;
    url: string;
    file: File;
    creationDate: string;
    uploaded: string;
  uploadBy : string;

    constructor(file: File) {
        this.file = file;
    }
}
