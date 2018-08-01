import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverOptionPage } from '../popover/popover';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { App } from 'ionic-angular/components/app/app';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-icu',
  templateUrl: 'icu.html',
})
export class IcuPage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcuPage');
  }
  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }

  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  emergency() {
    // this.navCtrl.push(EmergencyPage)
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }
  add() {
    console.log("Sort is working")
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)
  }

  search() {
    console.log("Search is working")
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }

}

