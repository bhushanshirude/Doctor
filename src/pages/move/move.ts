import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { App } from 'ionic-angular/components/app/app';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';

@Component({
  selector: 'page-move',
  templateUrl: 'move.html',
})
export class MovePage {
  isSubmitted = "true";
  Api_url = "";
  patient_action;
  d_id;
  cust_data = { question: '' };
  constructor(public navCtrl: NavController, public appCtrl: App, public viewCtrl: ViewController, public storage: Storage, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.cust_data = {
      question: ''
    }
    this.storage.get('patient_action').then((val) => {
      this.patient_action = val;
    });

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MovePage');
  }

  send(sendform) {
    this.isSubmitted = "true";
    if (this.cust_data.question == "") {
    }
    else {
      fetch(this.Api_url + 'users/android_patient_move', {
        method: 'POST',
        body: JSON.stringify({
          "Patient_Id": this.patient_action,
          "Doctor_Id": this.d_id,
          "Ward_Id": this.cust_data.question,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status == "Success") {
            this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
            this.viewCtrl.dismiss();
          } else if (data.Status == "Failed") {

          }
        }).catch((err => {
          console.log("server not responding Get Profile Details " + err);
        }))
    }
  }
}
