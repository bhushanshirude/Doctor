import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddDrugsPage } from '../add-drugs/add-drugs';



@IonicPage()
@Component({
  selector: 'page-drugs',
  templateUrl: 'drugs.html',
})
export class DrugsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrugsPage');
  }

  adddrugs() {
    this.navCtrl.setRoot(AddDrugsPage);
  }
  adds() {
    this.appCtrl.getRootNavs()[0].push(AddDrugsPage)
    // this.navCtrl.push(AddDrugsPage)
  }
}
