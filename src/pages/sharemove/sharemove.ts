import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sharemove',
  templateUrl: 'sharemove.html',
})
export class SharemovePage {
  isSubmitted = "true";
  Api_url = "";
  doctor_id;
  array;
  cust_data = { question: '', doctor: '' }
  constructor(public navCtrl: NavController, public storage: Storage, public viewCtrl: ViewController, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.cust_data = {
      question: '',
      doctor: ''
    }

    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Open(this.doctor_id);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharemovePage');
  }

  Open(id) {
    fetch(this.Api_url + 'users/android_patient_finddoctors', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_id": id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("RR@@@%%%###", data)
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

  send(sendform) {
    console.log("doctor", this.cust_data.doctor);
    console.log("question", this.cust_data.question);
    // this.isSubmitted = "true";
    // if (this.cust_data.question == "") {
    // }
    // else if (this.cust_data.doctor == "") {

    // }
    // else {
    //   fetch(this.Api_url + 'users/android_patient_move', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       // "Patient_Id": this.patient_action,
    //       // "Doctor_Id": this.d_id,
    //       "Hospital_Id": this.cust_data.doctor,
    //       "Ward_Id": this.cust_data.question,
    //     }),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   })
    //     .then(response => response.json())
    //     .then(data => {
    //       // if (data.Status == "Success") {
    //       //   this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
    //       //   this.viewCtrl.dismiss();
    //       // } else if (data.Status == "Failed") {

    //       // }
    //     }).catch((err => {
    //       console.log("server not responding Get Profile Details " + err);
    //     }))
    // }
  }
}
