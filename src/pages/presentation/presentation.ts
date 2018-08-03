import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-presentation',
  templateUrl: 'presentation.html',
})
export class PresentationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresentationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
}
