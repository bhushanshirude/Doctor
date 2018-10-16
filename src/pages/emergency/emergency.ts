import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { BloodPage } from '../blood/blood';
import { AmbulancePage } from '../ambulance/ambulance';
import { CasualtyPage } from '../casualty/casualty';
import { FundsPage } from '../funds/funds';

@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyPage');
  }
  ambulance(am) {
    console.log("value s niks", am)
    this.appCtrl.getRootNavs()[0].push(AmbulancePage, { data: am });
  }

  blood(bl) {
    console.log("value s niks", bl)
    this.appCtrl.getRootNavs()[0].push(BloodPage, { data: bl });
  }
  casulty(ca) {
    console.log("value s niks", ca)
    this.appCtrl.getRootNavs()[0].push(CasualtyPage, { data: ca });
  }
  
  funds(fu) {
    console.log("value s niks", fu)
    this.appCtrl.getRootNavs()[0].push(FundsPage, { data: fu });
  }

}
