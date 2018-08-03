import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-awards',
  templateUrl: 'awards.html',
})
export class AwardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwardsPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
}
