import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AccountsignupPage } from '../accountsignup/accountsignup';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-change',
  templateUrl: 'change.html',
})
export class ChangePage {
  isSubmitted = 'true';
  Doctor_id;
  error_msg;
  Api_url = "";
  change_data = { newpassword: '', confirmpassword: '' }
  constructor(public navCtrl: NavController, public storage: Storage, public appCtrl: App, public services: AllServiceProvider, public navParams: NavParams) {
    this.Api_url = this.services.user_api;
    this.change_data = {
      newpassword: '',
      confirmpassword: ''
    }
    this.storage.get("id").then((val) => {
      this.Doctor_id = val
      this.change(val);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePage');
  }

  change(val) {

    this.isSubmitted = "true";
    if (this.change_data.newpassword == "") {
      console.log('onSubmit New Password Null');
    }
    else if (this.change_data.confirmpassword == "") {
      console.log('onSubmit Confirm Password Null');
    }

    else {
      fetch(this.Api_url + 'users/android_doctor_changepassword', {
        method: 'POST',
        body: JSON.stringify({
          "NewPassword": this.change_data.newpassword,
          "ConfirmPassword": this.change_data.confirmpassword,
          "Doctor_Id": this.Doctor_id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU", data)
          this.error_msg = data.Results;
          if (data.Status == "Success") {
            this.appCtrl.getRootNavs()[0].setRoot(AccountsignupPage);
            localStorage.clear();
          } else if (data.Status == "Failed") {
          }
        })
    }
  }
}
