import { Component } from '@angular/core';
import { NavController, NavParams, App, ToastController, MenuController } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { AllServiceProvider } from '../../providers/services';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-addpatientward',
  templateUrl: 'addpatientward.html',
})
export class AddpatientwardPage {
  isSubmitted: 'true';
  s_id;
  h_id;
  u_id;
  doctor_id;
  hospital_status: '';
  scannedCode = null;
  Api_url = "";
  patient_data = { FirstName: '', LastName: '', Diagnosis: '', MobileNo: '', Email: '' }
  constructor(public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public barcodeScanner: BarcodeScanner, public services: AllServiceProvider, public toastCtrl: ToastController, public storage: Storage, public appCtrl: App) {
    this.Api_url = this.services.user_api;
    this.patient_data = {
      FirstName: '',
      LastName: '',
      Diagnosis: '',
      MobileNo: '',
      Email: ''
    }
    this.storage.get('R_id').then((val) => {
      this.h_id = val;
    });
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Patient Successfully Added',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  backDashboard() {
    this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpatientwardPage');
  }
  Reset() { }

  Submit(addform) {
    this.isSubmitted = "true";
    if (this.patient_data.FirstName == "") {
      console.log('onSubmit Name Null');
    }
    else if (this.patient_data.LastName == "") {
      console.log('onSubmit Email Null');
    }
    else if (this.patient_data.Diagnosis == "") {
      console.log('onSubmit MobileNo Null');
    }
    else if (this.patient_data.MobileNo == "") {
      console.log('onSubmit Password Null');
    }
    else if (this.patient_data.Email == "") {
      console.log('onSubmit Password Null');
    }
    else {
      console.log('onSubmit Email=>' + this.patient_data.Email);

      fetch(this.Api_url + 'users/android_addpatient', {
        method: 'POST',
        body: JSON.stringify({
          "FirstName": this.patient_data.FirstName,
          "LastName": this.patient_data.LastName,
          "Diagnosis": this.patient_data.Diagnosis,
          "MobileNo": this.patient_data.MobileNo,
          "Email": this.patient_data.Email,
          "Hospital_Status": "1",
          "Hospital_Id": this.h_id,
          "Doctor_Id": this.doctor_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status == "Success") {
            this.presentToast();
            this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
          } else if (data.Status == "Failed") {

          }
        })
    }
  }
  scanCode() {
    this.menu.close();
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      fetch(this.Api_url + 'users/android_add_patient_usingscan', {
        method: 'POST',
        body: JSON.stringify({
          "Hospital_Id": this.h_id,
          "Hospital_Status": "1",
          "User_Group_Id": "3",
          "Doctor_Id": this.doctor_id,
          "Scan_Id": this.scannedCode,

        }),
        headers: {

          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status == "Success") {
            console.log("patint added success fully");
            this.presentToast();
            this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
          } else if (data.Status == "Failed") {
            console.log("Error occour")
          }
        })

    }, (err) => {
      console.log('Error: ', err);
    });
  }
}
