import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { CommentPage } from '../comment/comment';

@Component({
  selector: 'page-showcomment',
  templateUrl: 'showcomment.html',
})
export class ShowcommentPage {
  Api_url = "";
  Thread_Id;
  Doctor_Id;
  array;
  thread;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.Thread_Id = navParams.get('data');
    this.Doctor_Id = navParams.get('doctor');
    this.thread = navParams.get('thread_name');
    this.getforumdetails();
  }

  // ionViewDidLoad() {
  //   this.getforumdetails();
  // }

  getforumdetails() {
    fetch(this.Api_url + 'forumcomments/android_getfourmcomments', {
      method: 'POST',
      body: JSON.stringify({
        "thread_id": this.Thread_Id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Amnil ", data)
        this.array = data.Results;
        this.storage.set('count', data.Count)
        console.log("Get comment message Display", this.array);
      })
  }
  comment() {
    console.log("Comment section working");
    this.modalCtrl.create(CommentPage, { cssClass: 'inset-modal', data: this.Thread_Id })
      .present();
  }
}
