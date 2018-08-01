import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { PatientsProfileTabs } from '../patients-profile-tabs/patients-profile-tabs';
import { AddPatientPage } from '../add-patient/add-patient';
import { EmergencyPage } from '../emergency/emergency';

@Component({
  selector: 'page-ward',
  templateUrl: 'ward.html',
})
export class WardPage {
  [x: string]: any;
  constructor(public navCtrl: NavController, public appCtrl: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WardPage');
  }
 

  patient() {
    this.appCtrl.getRootNavs()[0].push(PatientsProfileTabs);
  }
  add(){
    console.log("Sort is working")
    this.appCtrl.getRootNavs()[0].push(AddPatientPage)  
  }
  search(){
    console.log("Search is working")
    this.value = 'search';
  }
  sea() {
    this.value = 'search !=search';
  }
  emergency() {
    // this.navCtrl.push(EmergencyPage)
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
}

}
