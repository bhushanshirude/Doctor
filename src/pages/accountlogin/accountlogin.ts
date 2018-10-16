import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { AccountsignupPage } from '../accountsignup/accountsignup';
import { AccountforgotpasswordPage } from '../accountforgotpassword/accountforgotpassword';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { Http } from '@angular/http';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-accountlogin',
  templateUrl: 'accountlogin.html',
})
export class AccountloginPage {
  error_mes: string;
  page_name = "Login Page";
  submitted = false;
  Api_url = "";
  REGISTER_URL = ""; new_email; new_mobile; password;
  isSubmitted = false;
  login_data = { Email: '', Password: '' };

  constructor(public navCtrl: NavController, public services: AllServiceProvider, public http: Http, public storage: Storage, public menuCtrl: MenuController, public loadingCtrl: LoadingController) {
    this.Api_url = this.services.user_api;
    this.login_data = {
      Email: '',
      Password: ''
    }
  }
  ngOnInit() {
    this.storage.get('login').then((val) => {
      console.log('login user=>', val);
      if (val == 'true') {
        this.menuCtrl.enable(true);
        console.log("status=>" + val);
        this.navCtrl.setRoot(HospitalDashboard);
      } else {

      }
    })
  }
  ionViewDidLoad() { }

  onPageDidEnter() {
    this.menuCtrl.enable(false);
  }

  forgotPasswordPage() {
    this.navCtrl.push(AccountforgotpasswordPage);
  }
  onPageDidLeave() {
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLeave() { }

  onSignup() {
    console.log("Button Click :onSignup");
    this.navCtrl.push(AccountsignupPage);
  }


  Doctor() {
    this.storage.set('usertype', 'Doctor');

  }


  login(loginForm) {
    let mobile;
    this.isSubmitted = true;
    if (this.login_data.Email == "") {
    }
    else if (this.login_data.Password == "") {
    }
    else {
      mobile = this.login_data.Email;
      this.password = this.login_data.Password;
      this.error_mes = "";
      if (mobile == "") {
        this.error_mes = "Enter Userid not Valid";
        this.isSubmitted = false;

      } else if (this.password == "") {
        this.error_mes = "Password not valid";
        this.isSubmitted = false;
      } else {
        if (isNaN(mobile)) {
          let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(mobile)) {
            this.error_mes = "Email Id not Valid";
            this.isSubmitted = false;
          } else {
            this.new_email = mobile;
            this.new_mobile = "";
            this.isSubmitted = true;
          }
        } else {
          if (mobile.length != 10) {
            this.error_mes = "Mobile No not Valid";
            this.isSubmitted = false;
          } else {
            this.new_email = "";
            this.new_mobile = mobile;
            this.isSubmitted = true;
          }
        }
        fetch(this.Api_url + 'users/androidlogin/', {
          method: 'POST',
          body: JSON.stringify({
            "Email": this.new_email,
            "Mobile": this.new_mobile,
            "Password": this.login_data.Password,
            "User_Group_Id": "2",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(response => response.json())
          .then(data => {
            this.error_mes = data.Results;
            if (data.Status == "Success") {
              this.storage.set('login', "true");
              this.storage.set('alumni_group_id', data.Results.alumni_group_id);
              this.storage.set('contact_no', data.Results.contact_no);
              this.storage.set('created', data.Results.created);
              this.storage.set('date_of_birth', data.Results.date_of_birth);
              this.storage.set('diagnosis_procidure', data.Results.diagnosis_procidure);
              this.storage.set('doctor_awards', data.Results.doctor_awards);
              this.storage.set('doctor_batch', data.Results.doctor_batch);
              this.storage.set('doctor_consultant_type', data.Results.doctor_consultant_type);
              this.storage.set('doctor_description', data.Results.doctor_description);
              this.storage.set('doctor_education', data.Results.doctor_education);
              this.storage.set('doctor_experience', data.Results.doctor_experience);
              this.storage.set('doctor_memberships', data.Results.doctor_memberships);
              this.storage.set('doctor_practice_area', data.Results.doctor_practice_area);
              this.storage.set('doctor_specialization', data.Results.doctor_specialization);
              this.storage.set('email', data.Results.email);
              this.storage.set('doctor_first_name', data.Results.first_name);
              this.storage.set('hospital_id', data.Results.hospital_id);
              this.storage.set('hospital_status', data.Results.hospital_status);
              this.storage.set('id', data.Results.id);
              this.storage.set('image', data.Results.image);
              this.storage.set('doctor_last_name', data.Results.last_name);
              this.storage.set('sex', data.Results.sex);
              this.storage.set('website_url', data.Results.website_url);
              this.storage.set('registration_no', data.Results.registration_no);
              this.storage.set('location', data.Results.location);
              this.storage.set('medical_council', data.Results.medical_council);
              this.storage.set('medical_council_year', data.Results.medical_council_year);
              this.storage.set('mobile_no', data.Results.mobile_no);
              this.storage.set('modified', data.Results.modified);
              this.storage.set('pathologylab_id', data.Results.pathologylab_id);
              this.storage.set('user_group_id', data.Results.user_group_id);
              this.storage.set('user_id', data.Results.user_id);
              this.storage.set('username', data.Results.username);
              this.storage.set('active', data.Results.active);
              this.navCtrl.setRoot(HospitalDashboard);
              // this.Doctor();
            } else {
              console.log("Checkingss")
            }
          })
          .catch((error: Response) => {
            this.error_mes = "Wrong Email Address or Password ";
            console.log("Error Server Not Responding " + error);
          });
      }
    }
  }
}
