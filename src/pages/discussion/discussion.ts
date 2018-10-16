import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { AddDiscussionPage } from '../add-discussion/add-discussion';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
  }
  discussion() {
    this.navCtrl.setRoot(AddDiscussionPage);
  }
  sendMsg() { }

  onFocus() { }

  switchEmojiPicker() { }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }
}
