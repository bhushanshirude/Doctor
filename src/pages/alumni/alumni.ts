import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { EmergencyPage } from '../emergency/emergency';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { NotificationviewPage } from '../notificationview/notificationview';


@Component({
  selector: 'page-alumni',
  templateUrl: 'alumni.html',
})
export class AlumniPage {
  doctor_id;
  graduation;
  postgraduation;
  fellowship;
  Api_url = "";
  message;
  notifiction_count = 0;
  noti_count;
  constructor(public navCtrl: NavController, public storage: Storage, public services: AllServiceProvider, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = this.services.user_api;
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Get_Doctor(val);
    })
  }
  ionViewWllEnter(val) {
    this.Get_Doctor(val);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumniPage');
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)
  }

  ionViewWillEnter() {
    this.call_notification();
  }
  Get_Doctor(doctor_id) {
    console.log("Doctor Send:=>" + doctor_id);
    fetch(this.Api_url + 'users/android_getalumni', {
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
        if (data.Status == "Success") {
          for (let i = 0; i <= data.alumni_data_fellow.length; i++) {
            this.graduation = data.alumni_data_ug;
            this.postgraduation = data.alumni_data_pg;
            this.fellowship = data.alumni_data_fellow;
          }
        } else if (data.Status == "Failed") {
          console.log()
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
