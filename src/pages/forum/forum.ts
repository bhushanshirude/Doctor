import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  data;
  d_id;
  array;
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  mySelectedIndex: number;
  Api_url = "";
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public storage: Storage, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    this.Api_url = this.services.user_api;
    this.storage.get('id').then((val) => {
      this.d_id = val;
      this.Get_group(this.d_id);
    })
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  dismiss(id, name) {
    this.appCtrl.getRootNavs()[0].setRoot(GroupPage, {
      data: name, datas: id
    })
    this.viewCtrl.dismiss();
  }

  Get_group(d_id) {
    fetch(this.Api_url + 'forumcategories/android_getfourmcategories', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": this.d_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("categories")
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

}
