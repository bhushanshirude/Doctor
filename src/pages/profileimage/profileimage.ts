import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profileimage',
  templateUrl: 'profileimage.html',
})
export class ProfileimagePage {
  d_id;
  Api_url = "";
  imageFileName;
  imageURI;
  status_msg;
  constructor(public navCtrl: NavController, public storage: Storage, public service: AllServiceProvider, public navParams: NavParams, public transfer: FileTransfer, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public camera: Camera) {
    this.Api_url = this.service.user_api;
    this.storage.get('id').then((val) => {
      this.d_id = val;
      console.log("Doctor idess", this.d_id)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileimagePage');
  }

  Show_Toast(msg) {
    let toast = this.toastCtrl.create({
      message: '' + msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log("Error please check", err)
      // this.presentToast(err);
    });
  }

  uploadFile() {
    this.imageFileName = this.d_id + '_Patient.png';
    this.status_msg = "" + this.imageFileName;
    console.log("Rahul id data", this.d_id)
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.imageFileName,
      chunkedMode: false,
      mimeType: "image/jpeg",
      // mimeType: 'multipart/form-data'
      headers: {}
    }
    this.status_msg = "";
    fileTransfer.upload(this.imageURI, this.Api_url + 'users/android_upload_profilepicture', options)
      .then((data) => {
        console.log(data + " Uploaded Successfully");
        // this.imageFileName = this.Api_url + 'users/android_upload_profilepicture/6.png'
        loader.dismiss();
        console.log(data);
        // console.log(data.response.Status)
        // if (data.response.Status == "Success") {

        // } else {

        // }
        console.log(" Image uploaded successfully");
        this.Show_Toast("Image uploaded successfully");
        // this.status_msg = JSON.stringify(data) + " Image uploaded successfully " + this.imageFileName;
      }, (err) => {
        console.log(err);
        loader.dismiss();
        console.log("Image Not uploaded successfully");
        this.Show_Toast("Image Not uploaded! Try Again ");
        // this.Show_Toast("Image Not uploaded! Try Again " + JSON.stringify(err));
        // this.status_msg = "Image Not uploaded  " + this.imageFileName + " \n " + JSON.stringify(err);
      });
  }
}

