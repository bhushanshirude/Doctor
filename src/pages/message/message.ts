import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  isSubmitted = "";
  d_id;
  p_id;
  Api_url = "";
  mesg_data = { message: '', diagnosis: '' }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public toastCtrl: ToastController, public navParams: NavParams, public storage: Storage, public appCtrl: App, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.mesg_data = {
      message: '',
      diagnosis: ''
    }
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Advice Send Successfully...',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  send(loginform) {
    this.isSubmitted = "true";
    if (this.mesg_data.message == "") {
      console.log('onSubmit Message Null');
    } else if (this.mesg_data.diagnosis == "") {
      console.log("Enter Diagnosis Here")
    }
    else {
      fetch(this.Api_url + 'users/android_add_advice', {
        method: 'POST',
        body: JSON.stringify({
          "Patient_Id": this.p_id,
          "Doctor_Id": this.d_id,
          "message": this.mesg_data.message,
          "Diagnosis": this.mesg_data.diagnosis
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Add Advice message Display", data)
          if (data.Status == "Success") {
            this.presentToast();
            this.viewCtrl.dismiss();
          } else if (data.Status == "Failed") {

          }
        })
    }
  }
}
