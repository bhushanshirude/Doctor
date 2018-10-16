import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';
import { PopoverOptionPage } from '../../pages/popover/popover';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { SearchPipe } from '../../pipes/search/search';
@Component({
  selector: 'page-opd',
  templateUrl: 'opd.html',
})
export class OpdPage {
  pipes: [SearchPipe];
  hospital_id;
  hospital_status;
  user_id;
  s_id;
  u_id;
  h_id;
  pass_id;
  Api_url = "";
  value;
  array;
  error_mes;
  d_id;
  ward_status;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public menu: MenuController, public services: AllServiceProvider, public appCtrl: App, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public storage: Storage) {

    this.Api_url = this.services.user_api;
    this.storage.get('patient_opd').then((val) => {
    })
    this.storage.get('hospital_id').then((val) => {
      this.h_id = val;
    })
    this.storage.get('user_id').then((val) => {
      this.u_id = val;
    })
    this.storage.get('hospital_status').then((val) => {
      this.s_id = val;
    })
    this.storage.get('id').then((val) => {
      this.d_id = val;
    })
  }

  ionViewDidLoad() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }


  add() {
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)
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
    this.storage.get('patient_opd').then((val) => {
      if (val != '' && val != undefined && val != null) {
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
    this.storage.get('patient_opd').then((val) => {
      if (val != '' && val != undefined && val != null) {
        for (let i = 0; i <= val.length; i++) {
          this.array = val;
        }
      } else {
        console.log("opd section not working")
      }
    }).catch((error: Response) => {
      console.log("opd section not working server");
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
          console.log("Opd status", data)
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
    this.storage.set('patient_action', p_id);
    let popover = this.popoverCtrl.create(PopoverPatientPage, { cssClass: 'contact-popover' });
    popover.present({
      ev: myEvent
    });
  }
}
