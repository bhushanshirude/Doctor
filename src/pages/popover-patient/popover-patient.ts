import { Component } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { AddPatientPage } from '../add-patient/add-patient';
import { AddHospitalPage } from '../add-hospital/AddHospitalPage';


@Component({
  template: `
  <ion-list>
  <button ion-item  (click)="addnewhospital()">Add New Hospital</button> 
  </ion-list>
`
})
export class PopoverPatientPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }
  backup() {
    console.log("Backup button click");
    this.viewCtrl.dismiss();

  }

  restoreBackup() {
    console.log("restoreBackup button Option click");
    this.viewCtrl.dismiss();

  }
  addnewhospital() {
    this.navCtrl.push(AddHospitalPage);
  }

  Addmewpatient() {
    this.navCtrl.push(AddPatientPage);
  }
  ionViewDidLoad() {
    console.log("aaaaaaaaaaaaaaaaaa")
  }
  ionViewWillEnter() {
    console.log("BBBBBBBBBBBBBBBBBBBB")
  }
  ionViewDidLeave() {
    console.log("CCCCCCCCCCCCCCCCCCCC")
  }

  ionViewWillUnload() {
    console.log("DDDDDDDDDDDDDDDDDDDDDD")
  }
}
