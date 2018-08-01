import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-graduation',
  templateUrl: 'graduation.html',
})
export class GraduationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraduationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
}
