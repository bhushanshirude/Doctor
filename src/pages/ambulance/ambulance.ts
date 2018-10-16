import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-ambulance',
  templateUrl: 'ambulance.html',
})
export class AmbulancePage {
  value;
  searchQuery: string = '';
  items: string[];
  array;
  ambulance;
  Api_url = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.ambulance = navParams.get('data');
  }
  getItems(ev: any) {
    const val = ev.target.value;
    console.log("My Value-" + val);
    fetch(this.Api_url + 'emergency_contacts/android_getemergencynumbers', {
      method: 'POST',
      body: JSON.stringify({
        "search_data": val,
        "search_category": this.ambulance
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Nishant", data);
        if (data.Status == "Success") {
          for (let i = 0; i < data.Results.length; i++) {
            this.array = data.Results;
          }
        } else if (data.Status == "Failed") {
        }
      })

  }
  ionViewWillEnter() {
    console.log("loading AmbulancePage")
  }
  ionViewDidLoad() {
    console.log('AmbulancePage');
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
