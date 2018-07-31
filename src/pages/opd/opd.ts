import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { PopoverOptionPage } from '../../pages/popover/popover';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';
import { DropPage } from '../drop/drop';

@Component({
  selector: 'page-opd',
  templateUrl: 'opd.html',
})
export class OpdPage {

  [x: string]: any;
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams, public popoverCtrl: PopoverController,public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpdPage');
  }
  //Show popover menu
  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }
  pagePatients() {
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
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)
  }
  search() {
    console.log("Search is working")
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
    // this.navCtrl.push(EmergencyPage)
  }

  click(pageName) {
    console.log('pop ckick SavereportPage');
    this.modalCtrl.create(DropPage, null, { cssClass: 'inset-modal' })
      .present();
  }
}
