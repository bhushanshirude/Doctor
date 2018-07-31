import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-alumni',
  templateUrl: 'alumni.html',
})
export class AlumniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumniPage');
  }

}
