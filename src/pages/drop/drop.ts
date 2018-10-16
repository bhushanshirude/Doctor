import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { AddHospitalPage } from '../add-hospital/AddHospitalPage';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-drop',
  templateUrl: 'drop.html',
})
export class DropPage {
  relationship = 'Pune';
  error_mes;
  array;
  d_id;
  data1;
  R_id;
  Api_url = "";
  hos_id;
  h_id;
  check_data = { doctor_Id: '' }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public appCtrl: App, public storage: Storage, public navParams: NavParams, public viewCtrl: ViewController) {
    this.Api_url = this.services.user_api;
    this.check_data = {
      doctor_Id: '',
    }
    this.d_id = navParams.get('item');
  }

  ionViewDidLoad() {
  }

  dismiss_hospital(name, id) {
    console.log("hospital name", name);
    console.log("hospital id", id)

    let data = { data: name, data1: id };
    this.storage.set('hospital_name', name);
    this.storage.set('hospital_id', id);
    // this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
    // window.location.reload();
    this.viewCtrl.dismiss(data);

  }

  dismiss() {
    this.viewCtrl.dismiss('false');
  }

  addhospital() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNavs()[0].push(AddHospitalPage);
  }
  
  ngOnInit() {
    if (this.d_id != "" && this.d_id != undefined && this.d_id != null) {
      fetch(this.Api_url + 'users/android_gethospitals', {
        method: 'POST',
        body: JSON.stringify({
          "doctor_Id": this.d_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.error_mes = data.error;
          if (data.Status == "Success") {
            this.storage.set('Doctor_Results', data.Results);
            this.array = data.Results;
            for (let i = 1; i <= data.Results.length; i++) {
              this.array = data.Results;
            }
          } else if (data.Status == "Failed") {
          }
        }).catch((err) => {
          console.log("server drop not responding =>");
        });
    } else {
      console.log("doctor Id Not Present")
    }
  }
}
