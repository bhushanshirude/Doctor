import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html',
})
export class PresentationPage {
  doctor_id: '';
  isSubmitted = false;
  Api_url = "";
  award_data: { Name: '', Place: '', Date: '' }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.award_data = {
      Name: '',
      Place: '',
      Date: ''
    }
    this.storage.get('id').then((val) => {
      console.log('Anil_id=>', val);
      this.doctor_id = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Presentation Successfully Added',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  submit(diplomaform) {
    this.isSubmitted = true;
    if (this.award_data.Name == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.award_data.Place == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.award_data.Date == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_add_award_presentation', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Name": this.award_data.Name,
          "Place": this.award_data.Place,
          "Date": this.award_data.Date,
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
          } else if (data.Status == "Failed") {
          }
        })
    }
  }
}
