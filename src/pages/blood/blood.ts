import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';
@Component({
  selector: 'page-blood',
  templateUrl: 'blood.html',
})
export class BloodPage {
  value;
  searchQuery: string = '';
  items: string[];
  array;
  blood;
  Api_url = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider) {
    this.blood = navParams.get('data');
    console.log("Get Api  Url Running", this.services.user_api)
    this.Api_url = this.services.user_api;
  }
  getItems(ev: any) {
    const val = ev.target.value;
    console.log("My Value-" + val);
    fetch(this.Api_url + 'emergency_contacts/android_getemergencynumbers', {
      method: 'POST',
      body: JSON.stringify({
        "search_data": val,
        "search_category": this.blood
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log("Nishant sir",data)
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BloodPage');
  }
  sea() {
    this.value = 'search !=search';
  }
  onDismiss() {
    console.log("Reconnection")
  }
  search() {
    this.value = 'searchbar';
  }


}
