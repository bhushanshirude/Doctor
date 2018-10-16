import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { App } from 'ionic-angular/components/app/app';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { EmergencyPage } from '../emergency/emergency';
import { AddPage } from '../add/add';
import { AllServiceProvider } from '../../providers/services';
import { DrugsPipe } from '../../pipes/search/drugs'
import { NotificationviewPage } from '../notificationview/notificationview';
@Component({
  selector: 'page-doctor-dashboard',
  templateUrl: 'doctor-dashboard.html',
})
export class DoctorDashboard {
  pipes: [DrugsPipe];
  value = '';
  doctor_id: '';
  arrays;
  Api_url = "";
  message;
  notifiction_count = 0;
  noti_count;
  constructor(navParams: NavParams, public services: AllServiceProvider, public appCtrl: App, public navCtrl: NavController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.Api_url = this.services.user_api;
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
    });
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Get_Doctor(val);
    });
  }

  pageHospital() {
    this.appCtrl.getRootNavs()[0].push(HospitalDashboard);
  }

  ionViewDidLoad() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })
  }

  ionViewWillEnter() {
    this.call_notification();
  }

  ionViewDidLeave() {
  }

  ionViewWillUnload() {
  }

  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)

  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage); ``
  }
  add() {
    this.appCtrl.getRootNavs()[0].push(AddPage)
  }
  search() {
    console.log("Search is working")
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }
  ngOnInit() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })

  }

  Get_Doctor(doctor_id) {
    console.log("Doctor Send:=>" + doctor_id);
    fetch(this.Api_url + 'users/android_getmydrugs', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Checking", data)
        if (data.Status == "Success") {
          this.arrays = data.Results;

          for (let i = 1; i <= data.Results.length; i++) {

            this.arrays = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

  call_notification() {
    fetch(this.Api_url + 'users/android_notifications', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": this.doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          this.message = data.Results;
          this.noti_count = data.Results.length;
          if (this.notifiction_count == this.noti_count) {
            console.log('Not New Notification Message');
            this.notifiction_count = 0;

          } else {
            this.notifiction_count = this.noti_count - this.notifiction_count;
            console.log('New Notification Message ' + this.notifiction_count);
            this.notifiction_count = 1;
          }
          this.storage.set('Noti_Count', this.noti_count);
          this.storage.set('Noti_Messages', this.message);

        } else if (data.Status == "Failed") {
          console.log("data loading failed")
        }
      }).catch((err) => {
        console.log("server drop not responding =>");
        return false;
      });
  }
}
