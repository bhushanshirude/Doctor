import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AddpatientwardPage } from '../addpatientward/addpatientward';
import { AllServiceProvider } from '../../providers/services';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { WardPipe } from '../../pipes/search/ward';
@Component({
  selector: 'page-ward',
  templateUrl: 'ward.html',
})
export class WardPage {
  pipes: [WardPipe];
  array;
  Api_url = "";
  value;
  doctor_id;
  ward_status;
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public popoverCtrl: PopoverController, public appCtrl: App, public navParams: NavParams, public storage: Storage) {
    this.Api_url = this.services.user_api;
    this.storage.get('patient_ward').then((val) => {
    });
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
  }

  ionViewDidLoad() {
    // this.get_doctor_details();
  }

  get_doctor_details() {
    // this.storage.get('patient_ward').then((val) => {
    // })
  }

  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }

  add() {
    this.appCtrl.getRootNavs()[0].push(AddpatientwardPage)
  }

  search() {
    console.log("Search is working")
    this.value = 'search';
  }

  sea() {
    this.value = 'search !=search';
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  ngOnInit() {
    this.storage.get('patient_ward').then((val) => {
      this.array = val;
      if (val != '' && val != undefined && val != null) {
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("Empty patient_ward records")
      }
    }).catch((error: Response) => {
      console.log("Not get ward");
    });
  }

  ionViewWillEnter() {
    this.storage.get('patient_ward').then((val) => {
      this.array = val;
      if (val != '' && val != undefined && val != null) {
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("Empty patient_ward records")
      }
    }).catch((error: Response) => {
      console.log("Not get ward2");
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
        console.log("Ward", data)
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
      });
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
