import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { AccountloginPage } from '../accountlogin/accountlogin';
import { AccountsignupPage } from '../accountsignup/accountsignup';

@Component({
  selector: 'page-accountforgotpassword',
  templateUrl: 'accountforgotpassword.html',
})
export class AccountforgotpasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    console.log("Button Click :onSignup");
    this.navCtrl.push(AccountsignupPage);
  }
  send(form:any ,event:Event){
    console.log("send forgot password")
  }

}
