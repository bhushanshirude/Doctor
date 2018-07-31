import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDiscussionPage } from '../add-discussion/add-discussion';

@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
  }
  discussion(){
    this.navCtrl.setRoot(AddDiscussionPage); 
  }
  sendMsg(){}
  onFocus(){}
  switchEmojiPicker(){}
}
