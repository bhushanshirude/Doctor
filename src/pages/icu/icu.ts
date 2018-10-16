import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverOptionPage } from '../popover/popover';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { App } from 'ionic-angular/components/app/app';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AddpatienticuPage } from '../addpatienticu/addpatienticu';
import { AllServiceProvider } from '../../providers/services';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { IcuPipe } from '../../pipes/search/icu';

@Component({
  selector: 'page-icu',
  templateUrl: 'icu.html',
})
export class IcuPage {
  pipes: [IcuPipe];
  array;
  doctor_id;
  value;
  Api_url = "";
  ward_status;
  constructor(public navCtrl: NavController, public appCtrl: App, public services: AllServiceProvider, public navParams: NavParams, public storage: Storage, public popoverCtrl: PopoverController) {
    this.Api_url = this.services.user_api;
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })
  }

  ionViewDidLoad() {

  }

  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }

  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }
  add() {
    this.appCtrl.getRootNavs()[0].push(AddpatienticuPage)
  }

  search() {
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }

  ngOnInit() {
    this.storage.get('patient_icu').then((val) => {
      if (val != '' && val != undefined && val != null) {
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("Empty patient_Icu records")
      }
    }).catch((error: Response) => {
      console.log("Not get ice");
    });
  }

  ionViewWillEnter() {
    console.log('@@Page2 :=> ICU willEnter');
    this.storage.get('patient_icu').then((val) => {
      if (val != '' && val != undefined && val != null) {
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("Empty patient_Icu records")
      }
    }).catch((error: Response) => {
      console.log("Not get ice2");
    });

  }
  view_patient(id) {
    fetch(this.Api_url + 'users/android_getpatient_profile', {
      method: 'POST',
      body: JSON.stringify({
        "Patient_Id": id,
        "Doctor_Id": this.doctor_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
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
          console.log("Ice Not Working properly")
        }
      })
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

