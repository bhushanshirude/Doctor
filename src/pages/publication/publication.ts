import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from '../../../node_modules/ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-publication',
  templateUrl: 'publication.html',
})
export class PublicationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicationPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  Submit() {
    this.viewCtrl.dismiss();
  }
}
