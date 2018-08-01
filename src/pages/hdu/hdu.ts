import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-hdu',
  templateUrl: 'hdu.html',
})
export class HduPage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HduPage');
  }

  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }

  emergency() {
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

