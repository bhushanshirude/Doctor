import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';

@Component({
  selector: 'page-add-drugs',
  templateUrl: 'add-drugs.html',
})
export class AddDrugsPage {
  data;
  cheked = 0;
  lab;
  Api_url = "";
  d_id;
  p_id;
  BF: string;
  DI: string;
  LU: string;
  drug_data = { medicinename: '', bf: '', lu: '', di: '', doses: '', }
  constructor(public navCtrl: NavController, public appCtrl: App, public services: AllServiceProvider, public navParams: NavParams, public storage: Storage) {
    this.Api_url = this.services.user_api;

    this.data = navParams.get('drug');

    this.lab = this.data;
    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
    })

    this.drug_data = {
      medicinename: '',
      bf: '',
      lu: '',
      di: '',
      doses: '',
    }
  }
  isValidCheckbox = {
    LU: false,
    DI: false,
    BF: false,
  }

  ionViewDidLoad() {
  }

  Reset() { }

  bf(val) {
    console.log("ER Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.isValidCheckbox.BF = false;
    } else {
      if (val == false) {
        this.isValidCheckbox.BF = true;
        this.cheked += 1;
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
          this.isValidCheckbox.BF = false;
        }
      }
      else if (val == true) {
        this.isValidCheckbox.BF = false;
        this.cheked -= 1;
        console.log("ER Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log("ER Checkbox False " + this.cheked);
    }
  }

  lu(val) {
    console.log("ER Checkbox  " + val + " count " + this.cheked);

    if (val == false) {
      this.isValidCheckbox.LU = true;
    }
    else if (val == true) {
      this.isValidCheckbox.LU = false;
      console.log("ER Checkbox False " + this.isValidCheckbox.LU);
    } else {
      console.log("Else Block");
    }
    console.log("ER Checkbox False " + this.isValidCheckbox.LU);
  }

  di(val) {
    console.log("ER Checkbox  " + val + " count " + this.cheked);
    if (val == false) {
      this.isValidCheckbox.DI = true;
    }
    else if (val == true) {
      this.isValidCheckbox.DI = false;
      console.log("ER Checkbox False " + this.cheked);
    } else {
      console.log("Else Block");
    }
    console.log("ER Checkbox False " + this.cheked);
  }

  submit(drugform) {
    let bf = 0;
    if (this.isValidCheckbox.BF == false) {
      bf = 0;
    } else {
      bf = 1;
    }

    let lu = 0;
    if (this.isValidCheckbox.LU == false) {
      lu = 0;
    } else {
      lu = 1;
    }

    let di = 0;
    if (this.isValidCheckbox.DI == false) {
      di = 0;
    } else {
      di = 1;
    }

    fetch(this.Api_url + 'users/android_addpatient_medicines', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_Id": this.p_id,
        "Doctor_Id": this.d_id,
        "medicinename": this.drug_data.medicinename,
        "breakfast": bf,
        "lunch": lu,
        "dinner": di,
        "before_after_food": this.drug_data.doses,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Saket calling", data);
        if (data.Status == "Success") {
          this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
          // this.presentToast();
        } else if (data.Status == "Failed") {

        }
      })
  }
}
