import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, App } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { ShowcommentPage } from '../showcomment/showcomment';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  value = "";
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  mySelectedIndex: number;
  data;
  d_id;
  array;
  category;
  cate;
  categoris
  tab1Root = '';
  Api_url = "";
  subcategoris;
  thread_id;
  CountThread;
  constructor(public navCtrl: NavController, public appCtrl: App, public services: AllServiceProvider, public storage: Storage, public navParams: NavParams, public modalCtrl: ModalController) {
    this.Api_url = this.services.user_api;

    this.storage.get('Count').then((val) => {
      this.CountThread = val;
      console.log("")
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
      this.Get_group(this.d_id);
    })

    this.category = navParams.get('datas');

    this.data = navParams.get('data');

    if (this.data != "" && this.data != null) {
      this.value = this.data;
    } else {
      this.value = 'Select Group/Forum';
    }

    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.Get_SubCategoris();
  }

  ionViewDidLoad() {
    this.Get_SubCategoris();
  }

  ionViewWillUnload() {
    this.Get_SubCategoris();
  }

  click(pageName) {
    console.log('pop ckick SavereportPage');
    this.modalCtrl.create(ForumPage, null, { cssClass: 'inset-modal' })
      .present();

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
        console.log("android_getfourmcategories", data);
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

  Get_SubCategoris() {

    fetch(this.Api_url + 'forumsubcategories/android_getfourmsubcategories', {
      method: 'POST',
      body: JSON.stringify({
        "category_id": this.category
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("SubCategorises", data)
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.cate = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

  selectTab(val) {
    this.subcategoris = val;
    fetch(this.Api_url + 'forumthreads/android_getfourmthreds', {
      method: 'POST',
      body: JSON.stringify({
        "subcategory_id": this.subcategoris
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Threads display", data)
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.categoris = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })
  }

  open(id, name) {
    this.thread_id = id;
    this.navCtrl.push(ShowcommentPage, { data: this.thread_id, doctor: this.d_id, thread_name: name });

    // this.appCtrl.getRootNavs()[0].setRoot(ShowcommentPage);
    // this.appCtrl.getRootNavs()[0].setRoot();
    // this.modalCtrl.create(ShowcommentPage, { cssClass: 'inset-modal', data: this.thread_id })
    //   .present();

    // this.modalCtrl.create(CommentPage, { cssClass: 'inset-modal', data: this.thread_id })
    //   .present();
  }
}