import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-fellowships',
  templateUrl: 'fellowships.html',
})
export class FellowshipsPage {
  doctor_id: '';
  isSubmitted = false;
  Api_url = "";
  degree;
  college;
  fellowship_data: { Degree: '', College: '', Joining: '' }
  constructor(public navCtrl: NavController, public storage: Storage, public services: AllServiceProvider, public toastCtrl: ToastController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.fellowship_data = {
      Degree: '',
      College: '',
      Joining: ''
    }
    this.storage.get('id').then((val) => {
      console.log('Anil_id=>', val);
      this.doctor_id = val;
    });
    this.collegelist();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Fellowship Successfully Added',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GraduationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
  collegelist() {
    fetch(this.Api_url + 'pages/android_collegelist', {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          for (let i = 0; i <= data.Results.length; i++) {
            this.college = data.Results;
          }
        } else {
          console.log("Not get data College list");
        }
      }).catch((error: Response) => {
        console.log("Error Server Not Responding");
      });
    fetch(this.Api_url + 'pages/android_degreelist', {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("degree list ", data);
        if (data.Status == "Success") {
          for (let i = 0; i <= data.Results.length; i++) {
            this.degree = data.Results;
          }
        } else {
          console.log("Not get data College list");
        }
      }).catch((error: Response) => {
        console.log("Error Server Not Responding");
      });
  }

  submit(diplomaform) {
    this.isSubmitted = true;
    if (this.fellowship_data.Degree == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.fellowship_data.College == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.fellowship_data.Joining == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_add_fellowship', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Degree": this.fellowship_data.Degree,
          "College": this.fellowship_data.College,
          "Joining": this.fellowship_data.Joining,
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
