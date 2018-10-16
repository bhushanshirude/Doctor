import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App, ToastController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';

@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {
  Api_url = "";
  p_id;
  d_id;
  isSubmitted = "";
  cust_data = { question: '', answer: '' }
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public appCtrl: App, public viewCtrl: ViewController, public storage: Storage, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.cust_data = {
      question: '',
      answer: ''
    }
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Question Added Successfully...',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  send(sendform) {
    console.log("patient_id", this.p_id);
    console.log("Doctor_id", this.d_id);
    this.isSubmitted = "true";
    if (this.cust_data.question == "") {
    }
    else if (this.cust_data.answer == "") {
    }
    else {
      fetch(this.Api_url + 'EditableQuestions/android_addeditable_questions', {
        method: 'POST',
        body: JSON.stringify({
          "patient_Id": this.p_id,
          "Doctor_Id": this.d_id,
          "question": this.cust_data.question,
          "answer": this.cust_data.answer
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("ssssssssssssssssssssss", data)
          if (data.Status == "Success") {
            this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
            this.presentToast();
            this.viewCtrl.dismiss();
          } else if (data.Status == "Failed") {

          }
        }).catch((err => {
          console.log("server not responding Get Profile Details " + err);
        }))
    }
  }
}