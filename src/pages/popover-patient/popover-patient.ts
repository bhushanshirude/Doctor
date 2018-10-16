import { Component } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { MovePage } from '../move/move';
import { SharedpatientPage } from '../sharedpatient/sharedpatient';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})

export class PopoverPatientPage {
  Api_url = "";
  doctor_id;
  patient_action;
  constructor(public viewCtrl: ViewController, public storage: Storage, public appCtrl: App, public services: AllServiceProvider, public navCtrl: NavController, public app: App, public modalCtrl: ModalController) {
    this.Api_url = this.services.user_api;

    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });

    this.storage.get('patient_action').then((val) => {
      this.patient_action = val;
    });

  }

  // support() {
  //   this.app.getRootNav().push('SupportPage');
  //   this.viewCtrl.dismiss();
  // }
  // backup() {
  //   console.log("Backup button click");
  //   this.viewCtrl.dismiss();
  // }

  // restoreBackup() {
  //   console.log("restoreBackup button Option click");
  //   this.viewCtrl.dismiss();
  // }

  // addnewhospital() {
  //   this.navCtrl.push(AddHospitalPage);
  // }

  // Addmewpatient() {
  //   this.navCtrl.push(AddPatientPage);
  // }

  Delete() {
    this.viewCtrl.dismiss();
    fetch(this.Api_url + 'users/android_patient_delete', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_Id": this.patient_action,
        "Ward_Id": "17",
        "Doctor_Id": this.doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Delete", data);
        if (data.Status == "Success") {
          this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
          // 
          console.log("patient delete");
        } else {
          console.log("not delete")
        }
      })
      .catch((error: Response) => {
        console.log("Error Server Not Responding " + error);
      });
  }

  Move() {
    this.modalCtrl.create(MovePage, null, { cssClass: 'inset-modal' })
      .present();
    this.viewCtrl.dismiss();
  }

  Share() {
    console.log("Share not Working");
    this.viewCtrl.dismiss();
    this.modalCtrl.create(SharedpatientPage, { patient_action_id: this.patient_action }, { cssClass: 'inset-modal' })
      .present();
  }


  // ionViewDidLoad() {
  //   console.log("aaaaaaaaaaaaaaaaaa")
  // }

  // ionViewWillEnter() {
  //   console.log("BBBBBBBBBBBBBBBBBBBB")
  // }

  // ionViewDidLeave() {
  //   console.log("CCCCCCCCCCCCCCCCCCCC")
  // }

  // ionViewWillUnload() {
  //   console.log("DDDDDDDDDDDDDDDDDDDDDD")
  // }

}
