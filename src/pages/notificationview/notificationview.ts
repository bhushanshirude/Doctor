import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SharedprofilePage } from '../sharedprofile/sharedprofile';

@Component({
  selector: 'page-notificationview',
  templateUrl: 'notificationview.html',
})
export class NotificationviewPage {
  message;
  array;
  @Input() src_path: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('Noti_Messages').then((val) => {
      this.message = val;
      for (let i = 0; i <= val.length; i++) {
        this.array = val;
        console.log("Anils Priniting", this.array)
      }
    });
    this.src_path = "assets/imgs/sharing.png";
  }
  view() {
    this.navCtrl.push(SharedprofilePage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationviewPage');
  }

}
