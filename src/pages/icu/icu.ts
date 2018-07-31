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

  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IcuPage');
  }
  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }
  pagePatients() {
    // this.navCtrl.setRoot(ProfilePage);
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  addpatient() {
    this.navCtrl.push(AddPatientPage);
  }
  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  sort() {
    console.log("Sort is working")
    // this.navCtrl.push(AddPatientPage);
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)
  }
  search() {
    console.log("Search is working")
  }
  emergency() {
    // this.navCtrl.push(EmergencyPage)
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

}

