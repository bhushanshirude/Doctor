import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { AccountsignupPage } from '../accountsignup/accountsignup';
import { AccountforgotpasswordPage } from '../accountforgotpassword/accountforgotpassword';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {
  error_mes: string;
  page_name = "Login Page";
  submitted = false;
  REGISTER_URL = "";
  constructor(public navCtrl: NavController, public storage: Storage, public menuCtrl: MenuController, public loadingCtrl: LoadingController) {
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


  Doctor() {
    this.storage.set('usertype', 'Doctor');
    this.navCtrl.setRoot(HospitalDashboard);
  }

  login(loginForm) {
    console.log("login section", loginForm)
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...',
      duration: 5000
    });
    loading.present();
    fetch('http://192.168.0.14/healthcapitol/users/androidlogin', {
      method: 'POST',
      body: JSON.stringify({
        "Email": "user@user.com",
        "Password": "123456"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {

        console.log(data);

        // if (data.Status == "Success") {
        //   loading.dismiss();
        //   this.error_mes = "Successfully Login User!";
        //   for (let i = 0; i < data.Results.length; i++) {
        //     // console.log(data);
        //     console.log("userid:=> " + data.Results[i]._id);
        //     this.storage.set('referralCode', data.Results[i].referralCode);
        //     this.storage.set('user_pic', data.Results[i].user_pic);
        //     this.storage.set('user_code', data.Results[i].user_code);

        //     // contact email password user_refrence_code user_role first
        //     let toast = this.toastCtrl.create({
        //       message: 'Login successfully',
        //       duration: 3000,
        //       position: 'bottom',
        //       cssClass: 'green',
        //       showCloseButton: false
        //     });
        //     toast.present();
        //     this.menuCtrl.enable(true);
        //     this.navCtrl.setRoot(HomeDashboard);

        //   }
        // }
        // if (data.Status == "Error") {
        //   loading.dismiss();
        //   this.error_mes = data.Message;
        // }
      })
    // .catch((error: Response) => {
    //   loading.dismiss();
    //   this.error_mes = "Server Login Not Responding!";
    // });
    console.log("dddddddddddddddddd")
  }
}
