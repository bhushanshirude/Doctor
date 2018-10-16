import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-shareviewdrugs',
  templateUrl: 'shareviewdrugs.html',
})
export class ShareviewdrugsPage {
  lab;
  drugs
  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {
    this.storage.get('drugs_datas').then((val) => {
      this.drugs = val;
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareviewdrugsPage');
  }

}
