import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';

@Component({
  selector: 'page-add-hospital',
  templateUrl: 'add-hospital.html',
})

export class AddHospitalPage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHospitalPage');
  }
  backHospitalList() {
    this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
  }
}
