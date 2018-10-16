import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-shareviewlab',
  templateUrl: 'shareviewlab.html',
})
export class ShareviewlabPage {
  labs;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('lab_datas').then((val) => {
      this.labs = val;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareviewlabPage');
  }

}
