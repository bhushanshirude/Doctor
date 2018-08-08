import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';

import { AskPage } from '../ask/ask';
import { DnbPage } from '../dnb/dnb';
import { CarrerPage } from '../carrer/carrer';
import { NeetPage } from '../neet/neet';
import { FellowshipPage } from '../fellowship/fellowship';
import { NeetsPage } from '../neets/neets';
import { DnbsPage } from '../dnbs/dnbs';
import { UpscPage } from '../upsc/upsc';
import { AimsPage } from '../aims/aims';
import { OthersPage } from '../others/others';
import { UsPage } from '../us/us';
import { AusPage } from '../aus/aus';
import { AsiaPage } from '../asia/asia';
import { EuropePage } from '../europe/europe';
import { GulfPage } from '../gulf/gulf';

@IonicPage()
@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  value = "";

  tab1Root = NeetPage;
  tab2Root = DnbPage;
  tab3Root = FellowshipPage;
  tab4Root = CarrerPage;
  tab5Root = AskPage;


  tab6Root = UsPage;
  tab7Root = AusPage;
  tab8Root = AsiaPage;
  tab9Root = EuropePage;
  tab10Root = GulfPage;

  tab11Root = NeetsPage;
  tab12Root = DnbsPage;
  tab13Root = UpscPage;
  tab14Root = AimsPage;
  tab15Root = OthersPage;



  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;

  // value:string;
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    // this.value='Cardiology'; 

    this.data = navParams.get('data');
    if (this.data != "" && this.data != null) {
      this.value = this.data;
    } else {
    this.value = 'Cardiology';

    }
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';

    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }

  click(pageName) {
    console.log('pop ckick SavereportPage');
    this.modalCtrl.create(ForumPage, null, { cssClass: 'inset-modal' })
      .present();

  }

}
