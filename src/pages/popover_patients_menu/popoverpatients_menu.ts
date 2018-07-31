import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import { AddHospitalPage } from '../add-hospital/AddHospitalPage';
import { AddPage } from '../add/add';

@Component({
  template: `
  <ion-list>
  <button ion-item  (click)="addhospital()">Add Hospital</button> 
    <button ion-item  (click)="adddrugs()">Add Drugs</button> 
  </ion-list>
`
})
export class PopoverPatients_menu {
  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  constructor(public viewCtrl: ViewController, public navCtrl: NavController) { }

  restoreBackup() {
    console.log("restoreBackup button Option click");
    this.viewCtrl.dismiss();
  }
  adddrugs() {
    this.navCtrl.push(AddPage);
  }
  addhospital() {
    this.navCtrl.push(AddHospitalPage);
  }
}
