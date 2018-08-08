import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
// import { UserData } from '../../providers/user-data';
// import { UserOptions } from '../../interfaces/user-options';
import { AccountsignupPage } from '../accountsignup/accountsignup';
import { AccountforgotpasswordPage } from '../accountforgotpassword/accountforgotpassword';

import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {

  page_name = "Login Page";
  // login: UserOptions = { name: '', username: '', mobile: '0', password: '' };
  submitted = false;
  REGISTER_URL = "";
  constructor(public navCtrl: NavController, public storage: Storage, public menuCtrl: MenuController) {
    this.storage.get('usertype').then((val) => {
      if (val == "Doctor") {
        this.navCtrl.setRoot(HospitalDashboard);
      } if (val == "Patient") {
      } else {
      }
    });
  }

  ionViewDidLoad() {

  }

  onLogin() {
    this.storage.set('usertype', 'Doctor');
    this.storage.set('hasLoggedIn', true);
    this.navCtrl.setRoot(HospitalDashboard);
  }

  onPageDidEnter() {
    this.menuCtrl.enable(false);
    console.log(this.page_name + " events :onPageDidEnter Left Menu Hide");
  }

  forgotPasswordPage() { this.navCtrl.push(AccountforgotpasswordPage); }
  onPageDidLeave() {
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLeave() {
  }

  onForgot() {
    console.log("Button Click :onForgot");
  }

  onGoogleLogin() {
    console.log("Button Click :onGoogleLogin");
  }
  onSignup() {
    console.log("Button Click :onSignup");
    this.navCtrl.push(AccountsignupPage);
  }


  openDoctor() {
    this.storage.set('usertype', 'Doctor');
    this.navCtrl.setRoot(HospitalDashboard);
  }
  login(form: any, event: Event) {
    console.log("dddddddddddddddddd")
  }
}
