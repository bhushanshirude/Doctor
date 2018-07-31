import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { DrownprofilePage } from '../drownprofile/drownprofile';


@Component({
  selector: 'page-update-dr-profile',
  templateUrl: 'update-dr-profile.html',
})
export class UpdateDrProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public appCtrl:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDrProfilePage');
  }
  backDoctor() {
     this.appCtrl.getRootNavs()[0].setRoot(DrownprofilePage);
    
  }
}
