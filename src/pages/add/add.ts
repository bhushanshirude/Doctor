import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  medicine_data = { Medicine: '', Strength: '', Content: '' };
  isSubmitted: 'true';
  doctor_id = '';
  Api_url = "";
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public toastCtrl: ToastController, public navParams: NavParams, public storage: Storage, public appCtrl: App) {
    this.Api_url = this.services.user_api;
    this.medicine_data = {
      Medicine: '',
      Strength: '',
      Content: '',
    }
    this.doctor_id = navParams.get('item');
    console.log('ionViewDidLoad id==>' + this.doctor_id);
    this.get_doctor_details();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
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
      message: 'Medicine Successfully Added',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  Submit(addform) {
    this.isSubmitted = "true";
    if (this.medicine_data.Medicine == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.medicine_data.Strength == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.medicine_data.Content == "") {
      console.log('onSubmit Content Null');
    }
    else {
      fetch(this.Api_url + 'users/android_addmydrugs ', {
        method: 'POST',
        body: JSON.stringify({
          "Medicine": this.medicine_data.Medicine,
          "Strength": this.medicine_data.Strength,
          "Content": this.medicine_data.Content,
          "Doctor_ID": this.doctor_id,
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
            this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
          } else if (data.Status == "Failed") {
          }
        })
    }
  }
}

