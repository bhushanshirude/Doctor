import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyteamPage } from '../myteam/myteam';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-addteam',
  templateUrl: 'addteam.html',
})
export class AddteamPage {
  isSubmitted = '';
  doctor_data: { Name: '', Profession: '', Email: '', Mobileno: '', };
  doctor_id = '';
  Api_url = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider, public appCtrl: App, public storage: Storage, public toastCtrl: ToastController) {
    this.Api_url = this.services.user_api;
    this.doctor_data = {
      Name: '',
      Profession: '',
      Email: '',
      Mobileno: '',
    }
    this.doctor_id = navParams.get('item');
    console.log('ionViewDidLoad id==>' + this.doctor_id);
    this.get_doctor_details();
  }
  get_doctor_details() {
    this.storage.get('id').then((val) => {
      console.log('doctor_id=>', val);
      this.doctor_id = val;
    })
  }

  Reset() {

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Member Successfully Added',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddteamPage');
  }
  Submit(addform) {
    this.isSubmitted = "true";
    if (this.doctor_data.Name == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.doctor_data.Profession == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.doctor_data.Email == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.doctor_data.Mobileno == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_addteammember', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Name": this.doctor_data.Name,
          "Profession": this.doctor_data.Profession,
          "Email": this.doctor_data.Email,
          "MobileNo": this.doctor_data.Mobileno,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.Status == "Success") {
            this.presentToast();
            console.log("Checking")
            this.appCtrl.getRootNavs()[0].setRoot(MyteamPage);
          } else if (data.Status == "Failed") {
          }
        })
    }
  }
}
