import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-reportsend',
  templateUrl: 'reportsend.html',
})
export class ReportsendPage {
  report_data = { diagnosis: '', interpretation: '', }
  p_id;
  d_id;
  isSubmitted = "";
  Api_url = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider, public toastCtrl: ToastController, public storage: Storage, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.report_data = {
      diagnosis: '',
      interpretation: '',
    }
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsendPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Report Send Successfully...',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

  send(reportsendform) {
    this.isSubmitted = "true";
    if (this.report_data.diagnosis == "") {
      console.log('onSubmit diagnosis Null');
    } else if (this.report_data.interpretation == "") {
      console.log("Enter interpretation Here")
    }
    else {
      fetch(this.Api_url + 'users/android_add_profilereport', {
        method: 'POST',
        body: JSON.stringify({
          "Patient_Id": this.p_id,
          "Doctor_Id": this.d_id,
          "Diagnosis": this.report_data.diagnosis,
          "Interpretation": this.report_data.interpretation
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
