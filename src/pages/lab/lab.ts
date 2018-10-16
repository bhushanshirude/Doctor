import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AddLabPage } from '../add-lab/add-lab';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { MyLabPipe } from '../../pipes/search/lab';


@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html',
})
export class LabPage {
  pipes: [MyLabPipe];
  p_id;
  d_id;
  array;
  arrays;
  Api_url = "";
  value;
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public storage: Storage, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = this.services.user_api;

    this.storage.get('id').then((val) => {
      this.d_id = val;
    });

    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    });
  }
  search() {
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }
  ionViewWillEnter() {
    this.storage.get('id').then((val) => {
      this.d_id = val;
    });
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    });
    this.Get_Doctor(this.d_id, this.p_id);
  }

  ionViewDidLoad() {
    console.log("Connection data labs load");
  }

  ionViewDidLeave() {
    console.log("Connection data labs leave");
  }

  addlab() {
    this.navCtrl.setRoot(AddLabPage);
  }

  Get_Doctor(d_id, p_id) {
    if (d_id != "" && d_id != undefined && d_id != null && p_id != "" && p_id != undefined && p_id != null) {
      fetch(this.Api_url + 'users/android_getpatient_labreports', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_Id": d_id,
          "Patient_Id": p_id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status == "Success") {
            for (let i = 1; i <= data.Results.length; i++) {
              this.arrays = data.Results;
              this.storage.set('lab_report_count', data.lab_count);
            }
          } else if (data.Status == "Failed") {
            console.log("lab data Not get");
          }
        }).catch((error: Response) => {
          console.log("Error Server Not Responding ");
        });
    } else {
      console.log("Labs server Not Responding please check again")
    }
  }


  add() {
    fetch(this.Api_url + 'users/android_addpathalogy_report', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": this.d_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          this.array = data.investigation_list
          this.appCtrl.getRootNavs()[0].push(AddLabPage, {
            labs: this.array
          })
        } else if (data.Status == "Failed") {
        }
      })
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

}
