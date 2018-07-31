import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { App } from 'ionic-angular/components/app/app';
import { AddDrugsPage } from '../add-drugs/add-drugs';
import { AddLabPage } from '../add-lab/add-lab';



@Component({
  template: `
  <ion-list>
    <button ion-item (click)="add()">Add New Medicine</button>
    <button ion-item (click)="adds()">Add New Lab</button>
  </ion-list>
`
})
export class  PatientpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public app: App, public modalCtrl: ModalController) {
  }

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientpopoverPage');
  }
  add() {
    this.navCtrl.push(AddDrugsPage)
  }
  adds() {
    this.navCtrl.push(AddLabPage)
  }

}
