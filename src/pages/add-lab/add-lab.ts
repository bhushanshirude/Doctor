import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-lab',
  templateUrl: 'add-lab.html',
})
export class AddLabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddLabPage');
  }
  Reset() { }
  Submit() { }
}
