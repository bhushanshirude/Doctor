import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';



@Component({
  selector: 'page-add-patient',
  templateUrl: 'add-patient.html',
})
export class AddPatientPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHospitalPage');
  }
  backDashboard() {
    this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
  }
  Reset(){}
  Submit(){}
}
