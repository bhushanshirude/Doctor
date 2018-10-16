import { Component } from '@angular/core';
import { NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { AddpatientgwPage } from '../addpatientgw/addpatientgw';

import { GwPipe } from '../../pipes/search/gw';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-gw',
  templateUrl: 'gw.html',
})
export class GwPage {
  pipes: [GwPipe];
  Api_url = "";
  error_mes;
  array;
  d_id;
  ward_status;
  value;
  constructor(public navCtrl: NavController, public storage: Storage, public appCtrl: App, public popoverCtrl: PopoverController, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;

    this.storage.get('patient_gw').then((val) => {
    })
    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GwPage');
  }
  add() {
    this.appCtrl.getRootNavs()[0].push(AddpatientgwPage)
  }

  search() {
    this.value = 'search';
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  sea() {
    this.value = 'search !=search';
  }

  ngOnInit() {
    this.storage.get('patient_gw').then((val) => {
      if (val != '' && val != undefined && val != null) {
        this.storage.set("pat_extra_status", val[0].User.hospital_status);
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("opd not working")
      }
    }).catch((error: Response) => {
      console.log("Not get opd");
    });
  }

  ionViewWillEnter() {
    this.storage.get('patient_gw').then((val) => {
      if (val != '' && val != undefined && val != null) {
        this.storage.set("pat_er_status", val[0].User.hospital_status);
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("opd not working")
      }
    }).catch((error: Response) => {
      console.log("Not get opd");
    });
  }

  view_patient(id) {
    if (id != "" && id != undefined && id != null && this.d_id != "" && this.d_id != undefined && this.d_id != null) {
      fetch(this.Api_url + 'users/android_getpatient_profile', {
        method: 'POST',
        body: JSON.stringify({
          "Patient_Id": id,
          "Doctor_Id": this.d_id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("statass", data)
          this.error_mes = data.Results;
          if (data.Status == "Success") {
            this.storage.set("first_name", data.Results[0].User.first_name);
            this.storage.set("last", data.Results[0].User.last_name);
            this.storage.set("diagnosis", data.Results[0].User.diagnosis_procidure);
            this.storage.set("h_name", data.Results[0].Hospital.name);
            this.storage.set("opt_id", data.Results[0].User.id);
            this.storage.set('profile_picture', data.Results[0].User.profile_picture);
            this.storage.set("pathlab_reports", data.pathlab_reports_cnt);
            this.storage.set("patient_drugs", data.patient_drugs_cnt);
            this.ward_status = data.Results[0].User.hospital_status;

            if (data.Results[0].Userprofile.length == "1") {
              this.storage.set("patient_gender", data.Results[0].Userprofile[0].gender);
            } else if (data.Results[0].Userprofile.length == "0") {
              this.storage.set('patient_gender', '');
            } else {
              console.log("Not Get Gender Felied in data")
            }

            if (this.ward_status == "1") {
              this.storage.set('selected', 'WARD')
            }
            else if (this.ward_status == "2") {
              this.storage.set('selected', 'OPD')
            }
            else if (this.ward_status == "3") {
              this.storage.set('selected', 'ICU')
            }
            else if (this.ward_status == "4") {
              this.storage.set('selected', 'HDU')
            }
            else if (this.ward_status == "5") {
              this.storage.set('selected', 'OT')
            }
            else if (this.ward_status == "6") {
              this.storage.set('selected', 'ITU')
            }
            else if (this.ward_status == "7") {
              this.storage.set('selected', 'ICCU')
            }
            else if (this.ward_status == "8") {
              this.storage.set('selected', 'GW')
            }
            else if (this.ward_status == "9") {
              this.storage.set('selected', 'PW')
            }
            else if (this.ward_status == "10") {
              this.storage.set('selected', 'SPW')
            }
            else if (this.ward_status == "11") {
              this.storage.set('selected', 'SDICU')
            }
            else if (this.ward_status == "12") {
              this.storage.set('selected', 'REF')
            }
            else if (this.ward_status == "13") {
              this.storage.set('selected', 'EXTRA')
            }
            else if (this.ward_status == "14") {
              this.storage.set('selected', 'ER')
            }
            else {
              console.log("Not get Hospital_Status")
            }
            this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
          } else if (data.Status == "Failed") {
          }
        })
        .catch((error: Response) => {
          this.error_mes = "Wrong Email Address or Password ";
          console.log("Error Server Not Responding " + error);
        });
    }
    else {
      console.log("chaeck doctor or patient id")
    }
  }

  presentPopover(myEvent, p_id) {
    console.log('Onclick patient id check', p_id);
    this.storage.set('patient_action', p_id);
    let popover = this.popoverCtrl.create(PopoverPatientPage);
    popover.present({
      ev: myEvent
    });
  }
}
