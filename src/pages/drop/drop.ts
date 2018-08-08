import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { AddHospitalPage } from '../add-hospital/AddHospitalPage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';

@IonicPage()
@Component({
  selector: 'page-drop',
  templateUrl: 'drop.html',
})
export class DropPage {
  relationship = 'Pune';
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DropPage');
  }

  dismiss(value) {
    console.log("WWWWKKKKKKKSSSSSSAAAA",value)
    this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard, {
      data: value
    })
    this.viewCtrl.dismiss();
  }
  cancel() {
    this.viewCtrl.dismiss();
  }
  ok() {
    this.viewCtrl.dismiss();
  }
  addhospital() {
    this.viewCtrl.dismiss();
    this.appCtrl.getRootNavs()[0].push(AddHospitalPage);
  }
}
