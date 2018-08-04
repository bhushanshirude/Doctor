import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-myteam',
  templateUrl: 'myteam.html',
})
export class MyteamPage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyteamPage');
  }
  search() {
    console.log("Search is working")
    this.value = 'search';
  }

  sea() {
    this.value = 'search !=search';
  }
}
