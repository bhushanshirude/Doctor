import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
})
export class AddeventPage {
  // event = { title: "", location: "", message: "", startDate: "", endDate: "" };
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }
 
  
}
