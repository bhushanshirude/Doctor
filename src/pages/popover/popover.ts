import { Component } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { UpdateDrProfilePage } from '../update-dr-profile/update-dr-profile';
// import { UpdateDrProfilePage } from '../update-dr-profile/update-dr-profile';


@Component({
  template: `
  <ion-list>
    <button ion-item (click)="edit()" >Edit</button>
  </ion-list>
`
})
export class PopoverOptionPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
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
  //  {
  //   // this.app.getRootNav().push(UpdateDrProfilePage)
  //   this.viewCtrl.dismiss()
  // }
  edit(){
    this.navCtrl.push(UpdateDrProfilePage);

  }
}
