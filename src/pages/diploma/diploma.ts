import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-diploma',
  templateUrl: 'diploma.html',
})
export class DiplomaPage {
  doctor_id: '';
  isSubmitted = false;
  Api_url = "";
  degree;
  college;
  diploma_data: { Degree: '', College: '', Joining: '' }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public navParams: NavParams, public toastCtrl: ToastController, public storage: Storage, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.diploma_data = {
      Degree: '',
      College: '',
      Joining: ''
    }
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
    this.collegelist();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Diploma Successfully Added',
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

    fetch(this.Api_url + 'pages/android_diplomalist', {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("degree diploma list ", data);
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
    if (this.diploma_data.Degree == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.diploma_data.College == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.diploma_data.Joining == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_add_diploma', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Degree": this.diploma_data.Degree,
          "College": this.diploma_data.College,
          "Joining": this.diploma_data.Joining,
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
