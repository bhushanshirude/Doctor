import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AddDrugsPage } from '../add-drugs/add-drugs';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { PatientdrugsPipe } from '../../pipes/search/partientdrugs';

@Component({
  selector: 'page-drugs',
  templateUrl: 'drugs.html',
})
export class DrugsPage {
  pipes: [PatientdrugsPipe];
  d_id;
  p_id;
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

    })
  }
  ionViewDidLoad() {
    console.log("Connection data drugs load");
  }

  ionViewDidLeave() {
    console.log("Connection data drugs leave");
  }

  ionViewWillEnter() {
    this.Get_Doctor(this.d_id, this.p_id);
    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })
    // this.Get_Doctor(this.d_id, this.p_id);
  }

  search() {
    this.value = 'searchs';
  }
  sea() {
    this.value = 'searchs !=search';
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  Get_Doctor(d_id, p_id) {
    if (d_id != "" && d_id != undefined && d_id != null && p_id != "" && p_id != undefined && p_id != null) {
      fetch(this.Api_url + 'users/android_getpatient_drugs', {
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
          console.log("connection pending", data)
          if (data.Status == "Success") {
            for (let i = 0; i <= data.Results.length; i++) {
              this.array = data.Results;
              this.storage.set('drugs_count', data.drug_count);
            }
          } else if (data.Status == "Failed") {
            console.log("drugs data failed is Not Working")
          }
        })
        .catch((error: Response) => {
          console.log("Error Server Not Responding " + error);
        });
    } else {
      console.log("Lab Not Working check Doctor_id && Patient_id");
    }
  }

  adds() {
    fetch(this.Api_url + 'users/android_addpatient_drugs', {
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
          this.arrays = data.Results;
          this.appCtrl.getRootNavs()[0].push(AddDrugsPage, {
            drug: this.arrays
          })
        } else if (data.Status == "Failed") {
        }
      })
  }
}
