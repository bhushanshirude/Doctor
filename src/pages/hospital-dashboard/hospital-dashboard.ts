import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController, ModalController } from 'ionic-angular';
import { OpdPage } from '../opd/opd';
import { IcuPage } from '../icu/icu';
import { WardPage } from '../ward/ward';
import { HduPage } from '../hdu/hdu';
import { OtPage } from '../ot/ot';
import { IonicStorageModule, Storage } from '@ionic/storage';
// import { PopoverOptionPage } from '../popover/popover';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { DropPage } from '../drop/drop';

@Component({
  selector: 'page-hospital-dashboard',
  templateUrl: 'hospital-dashboard.html',
})
export class HospitalDashboard {
  tab1Root = OpdPage;
  tab2Root = IcuPage;
  tab3Root = WardPage;
  tab4Root = HduPage;
  tab5Root = OtPage;

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;

  constructor(public navParams: NavParams, public navCtrl: NavController,public modalCtrl:ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';

    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPatientPage);
    popover.present({ ev: event });
  }

  //Show popover menu
  // optionsPopover(event: Event) {
  //   let popover = this.popoverCtrl.create(PopoverOptionPage);
  //   popover.present({ ev: event });
  // }
  click(pageName) {
    console.log('pop ckick SavereportPage');
    this.modalCtrl.create(DropPage, null, { cssClass: 'inset-modal' })
      .present();
  }
}
