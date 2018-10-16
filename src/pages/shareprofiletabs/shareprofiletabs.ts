import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShareviewprofilePage } from '../shareviewprofile/shareviewprofile';
import { ShareviewlabPage } from '../shareviewlab/shareviewlab';
import { ShareviewdrugsPage } from '../shareviewdrugs/shareviewdrugs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-shareprofiletabs',
  templateUrl: 'shareprofiletabs.html',
})
export class ShareprofiletabsPage {
  tab1Root = ShareviewprofilePage;
  tab2Root = ShareviewlabPage;
  tab3Root = ShareviewdrugsPage;
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;
  labs;
  profile;
  first_name;
  last_name;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get('pat_first_name').then((val) => {
      this.first_name = val;
    });
    this.storage.get('pat_last_name').then((val) => {
      this.last_name = val;
    });

    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareprofiletabsPage');
  }

}
