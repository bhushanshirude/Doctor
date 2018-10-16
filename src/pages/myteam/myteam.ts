import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddteamPage } from '../addteam/addteam';
import { AllServiceProvider } from '../../providers/services';
import { NotificationviewPage } from '../notificationview/notificationview';
import { MyplayerPipe } from '../../pipes/search/myteam';
import { EmergencyPage } from '../emergency/emergency';
@Component({
  selector: 'page-myteam',
  templateUrl: 'myteam.html',
})
export class MyteamPage {
  pipes: [MyplayerPipe];
  pet = 'puppies';
  doctor_id;
  value;
  count;
  array;
  other;
  mySelectedIndex = 0;
  Api_url = "";
  message;
  notifiction_count = 0;
  noti_count;
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public storage: Storage, public navParams: NavParams, public appCtrl: App) {
    this.Api_url = this.services.user_api;
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
    });
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Get_Doctor(val);

    })
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })
  }

  ionViewWillEnter(val) {
    this.Get_Doctor(val);
    this.call_notification();
  }
  search() {
    console.log("Search is working")
    this.value = 'search';
  }

  sea() {
    this.value = 'search !=search';
  }

  add() {
    this.appCtrl.getRootNavs()[0].push(AddteamPage)
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  ngOnInit() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
  }

  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)
  }

  Get_Doctor(doctor_id) {
    console.log("Doctor Send:=>" + doctor_id);
    fetch(this.Api_url + 'users/android_getteammember', {
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
          for (let i = 0; i <= data.data_doctor.length; i++) {
            this.count = data.data_doctor.length
            this.array = data.data_doctor;
            this.other = data.data_other;
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

