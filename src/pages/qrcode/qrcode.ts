import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
    // this.navCtrl.push(EmergencyPage)
  }
}
