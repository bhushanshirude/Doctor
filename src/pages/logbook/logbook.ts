import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EmergencyPage } from '../emergency/emergency';
import { MyLabPipe } from '../../pipes/search/logbooks'
@Component({
  selector: 'page-logbook',
  templateUrl: 'logbook.html',
})
export class LogbookPage {
  pipes: [MyLabPipe];
  log;
  logbook;
  value;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
    this.log = navParams.get('logbook')
    this.logbook = this.log

    console.log("sssssssssssssRajesh", this.logbook)
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogbookPage');
  }
  add() {
    this.navCtrl.push(AboutPage);
  }
  search() {
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
    // this.navCtrl.push(EmergencyPage)
  }
}
