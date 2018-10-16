import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

 
@Component({
  selector: 'page-all',
  templateUrl: 'all.html',
})
export class AllPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPage');
  }

}
