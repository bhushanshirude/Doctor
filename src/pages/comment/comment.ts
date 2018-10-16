import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController, App } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { GroupPage } from '../group/group';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  Api_url = "";
  thread_id;
  d_id;
  comm_data = { message: '' }
  constructor(public navCtrl: NavController, public appCtrl: App, public viewCtrl: ViewController, public storage: Storage, public services: AllServiceProvider, public navParams: NavParams, public toastCtrl: ToastController) {
    this.Api_url = this.services.user_api;
    this.thread_id = navParams.get('data');

    this.storage.get('id').then((val) => {
      this.d_id = val;
    })

    this.comm_data = {
      message: '',
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Comment Send Successfully...',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    // this.viewCtrl.dismiss();
  }

  ionViewWillEnter() {
    // this.send(loginform);
  }

  send(loginform) {
    fetch(this.Api_url + 'forumcomments/android_addfourmcomments', {
      method: 'POST',
      body: JSON.stringify({
        "Thread_Id": this.thread_id,
        "comment": this.comm_data.message,
        "Doctor_Id": this.d_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Add comment message Display", data)
        if (data.Status == "Success") {
          this.appCtrl.getRootNavs()[0].setRoot(GroupPage);
          this.presentToast();
          this.viewCtrl.dismiss();
        } else if (data.Status == "Failed") {

        }
      })
  }
}
