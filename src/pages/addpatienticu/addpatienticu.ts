import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { AllServiceProvider } from '../../providers/services';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-addpatienticu',
  templateUrl: 'addpatienticu.html',
})
export class AddpatienticuPage {
  isSubmitted: 'true';
  h_id;
  doctor_id;
  scannedCode = null;
  Api_url = "";
  hospital_status: '';
  patient_data = { FirstName: '', LastName: '', Diagnosis: '', MobileNo: '', Email: '' }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public barcodeScanner: BarcodeScanner, public menu: MenuController, public navParams: NavParams, public appCtrl: App, public toastCtrl: ToastController, public storage: Storage) {
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
    });
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
    console.log('ionViewDidLoad AddpatienticuPage');
  }
  Reset() { }
  Submit(addform) {
    this.isSubmitted = "true";
    if (this.patient_data.FirstName == "") {
    }
    else if (this.patient_data.LastName == "") {
    }
    else if (this.patient_data.Diagnosis == "") {
    }
    else if (this.patient_data.MobileNo == "") {
    }
    else if (this.patient_data.Email == "") {
    }
    else {
      fetch(this.Api_url + 'users/android_addpatient', {
        method: 'POST',
        body: JSON.stringify({
          "FirstName": this.patient_data.FirstName,
          "LastName": this.patient_data.LastName,
          "Diagnosis": this.patient_data.Diagnosis,
          "MobileNo": this.patient_data.MobileNo,
          "Email": this.patient_data.Email,
          "Hospital_Status": "3",
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
          "Hospital_Status": "3",
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
