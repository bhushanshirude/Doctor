import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import { App } from 'ionic-angular/components/app/app';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { PopoverOptionPage } from '../popover/popover';
import { AddHospitalPage } from '../add-hospital/AddHospitalPage';
import { PopoverPatients_menu } from '../popover_patients_menu/popoverpatients_menu';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { EmergencyPage } from '../emergency/emergency';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-doctor-dashboard',
  templateUrl: 'doctor-dashboard.html',
})
export class DoctorDashboard {
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;
  public value = null;
  DrownhospitalPage: any;

  constructor(navParams: NavParams, public appCtrl: App, public navCtrl: NavController,
    public popoverCtrl: PopoverController, public storage: Storage,
    public localStorage: IonicStorageModule) {
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
    this.value = "Please Select Hospital";
    // console.log(this.value)
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPatients_menu);
    popover.present({ ev: event });
  }

  //Show popover menu
  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }

  onSelectChange(selectedValue: any) {
    // send data one page to another page

    this.navCtrl.setRoot(HospitalDashboard, {
      item1: selectedValue
    })
    this.value = selectedValue;
  }
  pressed() {
    console.log("presses used to the hospital")
    this.value = "pressed";
  }
  active() {
    console.log("active used to the hospital")
    this.value = "active";
  }
  released() {
    console.log("released used to the hospital")
    this.value = "released";
  }

  pageHospital() {
    this.appCtrl.getRootNavs()[0].push(HospitalDashboard);
  }
  ionViewDidLoad() {
    console.log("aaaaaaaaaaaaaaaaaa")
  }
  ionViewWillEnter() {
    console.log("BBBBBBBBBBBBBBBBBBBB")
    // this.value ="Sasun Hospital"
  }
  ionViewDidLeave() {
    console.log("CCCCCCCCCCCCCCCCCCCC")
  }

  ionViewWillUnload() {
    console.log("DDDDDDDDDDDDDDDDDDDDDD")
  }

  addHospital() {
    this.navCtrl.push(AddHospitalPage);
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
    // this.navCtrl.push(EmergencyPage)
  }
  sort() {
    this.appCtrl.getRootNavs()[0].push(AddPage)
  }
}
