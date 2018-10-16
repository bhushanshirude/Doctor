import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverOptionPage } from '../popover/popover';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { App } from 'ionic-angular/components/app/app';
import { ShareprofiletabsPage } from '../shareprofiletabs/shareprofiletabs';

@Component({
  selector: 'page-sharedprofile',
  templateUrl: 'sharedprofile.html',
})
export class SharedprofilePage {
  Api_url = "";
  doctor_id;
  array;
  lab_data;
  drugs_data;
  profile_data;
  constructor(public navCtrl: NavController, public appCtrl: App, public storage: Storage, public services: AllServiceProvider, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.Api_url = this.services.user_api;
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Open(this.doctor_id);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharedprofilePage');
  }

  Open(id) {
    fetch(this.Api_url + 'users/shared_profile_patient_list', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Shared Patient List", data)
        if (data.Status == "Success") {
          this.array = data.Results;
        }
        else {
          console.log("Not get Hospital_Status")
        }
      });
  }

  view_patient(id, first_name, last_name) {
    fetch(this.Api_url + 'users/shared_profile_patient_data', {
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
        console.log('Rajesh', data)
        if (data.Status == "Success") {
          this.lab_data = data.Results.Lab_Result;
          this.drugs_data = data.Results.Drug_Result;
          this.profile_data = data.Results.Profile_Result;
          if (data.Results.Lab_Result) {
            this.storage.set('lab_datas', data.Results.Lab_Result);
          } else {
            this.storage.set('lab_datas', null);
          }

          if (data.Results.Drug_Result) {
            this.storage.set('drugs_datas', data.Results.Drug_Result);
          } else {
            this.storage.set('drugs_datas', null);
          }


          if (data.Results.Profile_Result.userprofiles) {
            this.storage.set('profile_datas', data.Results.Profile_Result);
          }
          else {
            this.storage.set('profile_datas', null);
          }


          if (data.User.User) {
            this.storage.set('User', data.Results.Profile_Result);
          } else {
            this.storage.set('User', null);
          }

          if (data.Results.Age[0]) {
            this.storage.set('Age', data.Results.Age[0].AgeOfPatient);
          } else {
            this.storage.set('Age', null);
          }


          this.storage.set('pat_first_name', first_name);
          this.storage.set('pat_last_name', last_name);
          this.storage.set('pat_id', id);

          this.appCtrl.getRootNavs()[0].push(ShareprofiletabsPage)
        }
        else {
          console.log("Profile is not getting")
        }
      });
  }
  presentPopover(myEvent, id) {
    this.storage.set('patient_shared_id', id);
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({
      ev: myEvent
    });
  }
}
