import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';

@Component({
  selector: 'page-add-lab',
  templateUrl: 'add-lab.html',
})
export class AddLabPage {
  labs;
  lab;
  isSubmitted = "";
  Api_url = "";
  invitigation;
  p_id;
  d_id;
  lab_data = { Invistigation: '', Maxrange: '', Minrange: '', report: '', Unit: '' }
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public appCtrl: App, public storage: Storage, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.labs = navParams.get('labs');
    this.lab = this.labs
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
    this.lab_data = {
      Invistigation: '',
      Maxrange: '',
      Minrange: '',
      report: '',
      Unit: ''
    }
  }
  dismiss() {
  }


  ionViewDidLoad(val) {
    console.log('ionViewDidLoad AddLabPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Lab Added Successfully',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  Reset() { }

  submit(addlabform) {
    this.isSubmitted = "true";
    if (this.lab_data.Maxrange == "") {
    }
    else if (this.lab_data.Minrange == "") {
    }
    else if (this.lab_data.report == "") {
    }
    else {
      fetch(this.Api_url + 'users/android_getpatient_addlabs', {
        method: 'POST',
        body: JSON.stringify({
          "Patient_Id": this.p_id,
          "Doctor_Id": this.d_id,
          "Invistigation": this.lab_data.Invistigation,
          "Maxrange": this.lab_data.Maxrange,
          "Minrange": this.lab_data.Minrange,
          "report": this.lab_data.report,
          "Unit": this.lab_data.Unit,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Rajesh calling", data);
          if (data.Status == "Success") {
            this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
            this.presentToast();
          } else if (data.Status == "Failed") {

          }
        })
    }
  }
}
