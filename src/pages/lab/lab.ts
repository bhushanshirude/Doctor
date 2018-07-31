import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AddLabPage } from '../add-lab/add-lab';

@IonicPage()
@Component({
  selector: 'page-lab',
  templateUrl: 'lab.html',
})
export class LabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabPage');
  }
  addlab() {
    this.navCtrl.setRoot(AddLabPage);
  }
  add() {
    this.appCtrl.getRootNavs()[0].push(AddLabPage)
    // this.navCtrl.push(AddLabPage)
  }
}
