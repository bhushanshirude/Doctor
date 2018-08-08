import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
// import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';
import { AccountloginPage } from '../accountlogin/accountlogin';
import { AccountforgotpasswordPage } from '../accountforgotpassword/accountforgotpassword';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'page-accountsignup',
  templateUrl: 'accountsignup.html',
})
export class AccountsignupPage {

  signup: UserOptions = { name: '', username: '', mobile: '', password: '' };
  submitted = false;
  page_name = " Signup Page ";
  cty;
  varible = "";


  constructor(public navCtrl: NavController, public menuCtrl: MenuController,

    // public userData: UserData
  ) { }
  ionViewDidLoad() {
    console.log(this.page_name + " events :ionViewDidLoad");
  }

  submit() {
    //  var link = 'http:/192.168.0.5/web_service/signup.php';
    // var myData = JSON.stringify({ name: this.signup.name, username: this.data.username, pwd: this.signup.password, status: "1" });

    // this.http.post(link, myData)
    //   .subscribe(data => {
    //     console.log("Responce!" + data);
    //     this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
    //   });
  }

  ionViewWillEnter() {
    console.log(this.page_name + " events :ionViewWillEnter");

    this.menuCtrl.swipeEnable(false);
    console.log(this.page_name + " events :ionViewWillEnter Left Side Menu Hide");
  }

  ionViewDidLeave() {
    console.log(this.page_name + " events :ionViewDidLeave");
  }

  validation_messages1 = {
    'username': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions.' }
    ],
  };



  loginPage() { this.navCtrl.push(AccountloginPage); }
  forgotPage() { this.navCtrl.push(AccountforgotpasswordPage); }

  onSignup(form: NgForm) {
    //  this.submit();
    // this.navCtrl.push(TabsPage);
    this.submitted = true;


    //   var ref = this.InAppBrowser.create('http://www.google.com','_self','_self');
    //ref.show();
    //  var ref = this.InAppBrowser.create('http://apache.org', '_blank', 'location=yes');
    // this.ref.addEventListener('loadstart', function(event) { alert(event.url); });

    //let browser = this.InAppBrowser.create('https://ionicframework.com/');
    /* let regExp = /^[0-9]{10}$/;
 
     if (!regExp.test(this.signup.mobile)) {
       console.log("Invalid Mobile no " + this.signup.mobile);
 
       return { "invalidMobile": true };
 
     } else {
       console.log("Mobile no " + this.signup.mobile);
     }*/
    if (form.valid) {
      // console.log("Signup Name:" + this.signup.name + " Email:" + this.signup.username + " Password:" + this.signup.password);
      // this.userData.logindata(this.signup.name,this.signup.mobile,this.signup.username,this.signup.password);

      // console.log("Click Signup Button");
      this.navCtrl.push(DoctorDashboard);
      // fetch('http://192.168.0.5/web_service/signup.php', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     "name":"" + this.signup.name,
      //     "email":"" + this.signup.username,
      //     "pwd":"" + this.signup.password,
      //     "tags":"4"       
      //   }),
      //   headers: {
      //       "Content-type": "application/json; charset=UTF-8",
      //     'Content-Type': 'application/json',
      //     'Accept': 'application/json'
      //   }
      // })
      //   .then(response => response.json())
      //   .then(data => {

      //     console.log(data);
      //     //  this.userData.login("Rahul1");
      //     this.navCtrl.push(TabsPage);
      //   });
      // http://192.168.0.5/
      // this.userData.signup(this.signup.username);
      // this.navCtrl.push(TabsPage);
    }
  }
  sign(form: any, event: Event) {
    console.log("sssssssaaaaaaaaaaaaaa")
  }

}
