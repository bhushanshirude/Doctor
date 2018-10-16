import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { AccountloginPage } from '../accountlogin/accountlogin';
import { AccountsignupPage } from '../accountsignup/accountsignup';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-accountforgotpassword',
  templateUrl: 'accountforgotpassword.html',
})
export class AccountforgotpasswordPage {
  isSubmitted: "true";
  Api_url = "";
  error_msg: string;
  forgot_data = { Email: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider) {
    this.Api_url = this.services.user_api;
    this.forgot_data = {
      Email: '',
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountforgotpasswordPage');
  }

  dashboardPage() {
    this.navCtrl.setRoot(DoctorDashboard);
  }
  loginPage() {
    this.navCtrl.push(AccountloginPage);
  }
  signupPage() {
    this.navCtrl.push(AccountsignupPage);
  }
  onSignup() {
    this.navCtrl.push(AccountsignupPage);
  }

  send(Forgotform) {
    this.isSubmitted = "true";
    if (this.forgot_data.Email == "") {
    } else {
      fetch(this.Api_url + 'users/android_doctor_forgetpassword', {
        method: 'POST',
        body: JSON.stringify({
          "Email_Id": this.forgot_data.Email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.error_msg = data.Results
          // if (data.Status == "Success") {
          //   // this.appCtrl.getRootNavs()[0].setRoot(AccountsignupPage);
          //   localStorage.clear();
          // } else if (data.Status == "Failed") {
          // }
        })
    }
  }
}
