import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';


@Component({
  selector: 'page-additionalqualification',
  templateUrl: 'additionalqualification.html',
})
export class AdditionalqualificationPage {
  doctor_id: '';
  Api_url = "";
  degree;
  college;
  isSubmitted = false;
  additional_data: { Degree: '', College: '', Joining: '' }
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider, public toastCtrl: ToastController, public storage: Storage, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.additional_data = {
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
      message: 'Additional Qualification Successfully Added',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalqualificationPage');
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
    // fetch(this.Api_url + 'pages/android_degreelist', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log("degree list ", data);
    //     if (data.Status == "Success") {
    //       for (let i = 0; i <= data.Results.length; i++) {
    //         this.degree = data.Results;
    //       }
    //     } else {
    //       console.log("Not get data College list");
    //     }
    //   }).catch((error: Response) => {
    //     console.log("Error Server Not Responding");
    //   });
  }

  submit(diplomaform) {
    this.isSubmitted = true;
    if (this.additional_data.Degree == "") {
      console.log('onSubmit MedicineName Null');
    }
    else if (this.additional_data.College == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else if (this.additional_data.Joining == "") {
      console.log('onSubmit MedicineStrength Null');
    }
    else {
      fetch(this.Api_url + 'users/android_add_qualification', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_ID": this.doctor_id,
          "Degree": this.additional_data.Degree,
          "College": this.additional_data.College,
          "Joining": this.additional_data.Joining,
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
