import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sharedpatient',
  templateUrl: 'sharedpatient.html',
})
export class SharedpatientPage {
  Api_url = "";
  array;
  doctor_id;
  patient_action_id
  diploma_data: { doctor: '' }
  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController, public viewCtrl: ViewController, public service: AllServiceProvider, public navParams: NavParams) {
    this.Api_url = this.service.user_api;
    this.diploma_data = {
      doctor: ''
    }
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
    this.patient_action_id = navParams.get('patient_action_id');
    this.doctor_list();
  }

  dismiss() {
    this.viewCtrl.dismiss('false');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharemedicinePage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Profile Share Successfully',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentToasts() {
    let toast = this.toastCtrl.create({
      message: 'Profile Not Shared',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  submit(diplomaform) {
    fetch(this.Api_url + 'users/shared_profile', {
      // fetch('http://192.168.0.11/healthcapitol/users/shared_profile', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_Id": this.patient_action_id,
        "From_Id": this.doctor_id,
        "To_Id": this.diploma_data.doctor
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          this.presentToast();
          this.viewCtrl.dismiss('false');
        } else if (data.Status == "Failed") {
          this.presentToasts();
          this.viewCtrl.dismiss('false');
        }
      })
  }

  doctor_list() {
    fetch(this.Api_url + 'users/android_patient_finddoctors', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_id": this.patient_action_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

}
