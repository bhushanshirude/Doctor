import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-publication',
  templateUrl: 'publication.html',
})
export class PublicationPage {
  doctor_id: '';
  isSubmitted = false;
  publication_data: { Title: '', Journal: '', Date: '', Issue: '' }
  Api_url = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider, public toastCtrl: ToastController, public storage: Storage, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.publication_data = {
      Title: '',
      Journal: '',
      Date: '',
      Issue: '',
    }
    this.storage.get('id').then((val) => {
      console.log('Anil_id=>', val);
      this.doctor_id = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Publication Successfully Added',
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
    if (this.publication_data.Title == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.publication_data.Journal == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.publication_data.Issue == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.publication_data.Date == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_add_publication', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Title": this.publication_data.Title,
          "Journal": this.publication_data.Journal,
          "Issue": this.publication_data.Issue,
          "Date": this.publication_data.Date,
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
