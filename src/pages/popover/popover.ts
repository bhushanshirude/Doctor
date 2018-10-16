import { Component } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { UpdateDrProfilePage } from '../update-dr-profile/update-dr-profile';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { AllServiceProvider } from '../../providers/services';
import { SharemovePage } from '../sharemove/sharemove';


@Component({
  template: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverOptionPage {
  Api_url = "";

  constructor(public viewCtrl: ViewController, public services: AllServiceProvider, public navCtrl: NavController, public appCtrl: App, public app: App, public modalCtrl: ModalController) {
    this.Api_url = this.services.user_api;

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }
  backup() {
    console.log("Backup button click");
    this.viewCtrl.dismiss();

  }

  restoreBackup() {
    console.log("restoreBackup button Option click");
    this.viewCtrl.dismiss();

  }

  edit() {
    this.navCtrl.push(UpdateDrProfilePage);

  }

  Delete() {
    this.viewCtrl.dismiss();
    fetch(this.Api_url + 'users/android_patient_delete', {
      method: 'POST',
      body: JSON.stringify({
        // "Patient_Id": this.patient_action,
        "Ward_Id": "17",
        // "Doctor_Id": this.doctor_id,
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
    console.log("Moves Working")
    this.modalCtrl.create(SharemovePage, null, { cssClass: 'inset-modal' })
      .present();
    this.viewCtrl.dismiss();
  }

  Share() {
    console.log("Share not Working");
    this.viewCtrl.dismiss();
    //   this.modalCtrl.create(SharedpatientPage, { patient_action_id: this.patient_action }, { cssClass: 'inset-modal' })
    //     .present();
  }
}
