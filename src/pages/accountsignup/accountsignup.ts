import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { UserOptions } from '../../interfaces/user-options';
import { AccountloginPage } from '../accountlogin/accountlogin';
import { AccountforgotpasswordPage } from '../accountforgotpassword/accountforgotpassword';
import { ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { AllServiceProvider } from '../../providers/services';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Platform } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-accountsignup',
  templateUrl: 'accountsignup.html',
})
export class AccountsignupPage {
  error_mes: string;
  speclialitys;
  sign_data = { FirstName: '', LastName: '', Registration: '', Email: '', Speciality: '', MobileNo: '', Password: '', medical_council: '' }
  signup: UserOptions = { name: '', username: '', mobile: '', password: '' };
  submitted = false;
  page_name = " Signup Page ";
  cty;
  varible = "";
  isSubmitted: 'true';
  cdRef;
  Signupform: FormGroup;
  Api_url = "";
  userUDID: string;
  constructor(public navCtrl: NavController, private platform: Platform, private uniqueDeviceID: UniqueDeviceID, public services: AllServiceProvider, public menuCtrl: MenuController, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.Api_url = this.services.user_api;
    this.sign_data = {
      FirstName: '',
      LastName: '',
      Registration: '',
      Email: '',
      Speciality: '',
      MobileNo: '',
      Password: '',
      medical_council: ''
    }
    this.specliality();
    this.getUDID();
  }


  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.Signupform = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
      MobileNo: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(10), Validators.maxLength(10)]),
      Email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });
  }
  async getUDID() {
    try {
      await this.platform.ready();
      this.userUDID = await this.uniqueDeviceID.get();
      // this.userUDID = "5";
    }
    catch (e) {
      console.error(e)
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Registation successfully',
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  presentToasts() {
    let toast = this.toastCtrl.create({
      message: 'Mobile Number or Email Already exist',
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log(this.page_name + " events :ionViewDidLoad");
  }

  ionViewWillEnter() {
    console.log(this.page_name + " events :ionViewWillEnter");

    this.menuCtrl.swipeEnable(false);
    console.log(this.page_name + " events :ionViewWillEnter Left Side Menu Hide");
  }

  ionViewDidLeave() {
    console.log(this.page_name + " events :ionViewDidLeave");
  }

  loginPage() {
    this.navCtrl.push(AccountloginPage);
  }


  forgotPage() {
    this.navCtrl.push(AccountforgotpasswordPage);
  }
  specliality() {
    fetch(this.Api_url + 'users/android_doctor_getspecialities', {
      method: 'POST',
      body: JSON.stringify({
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("specliality", data);
        if (data.Status == "Success") {
          for (let i = 0; i <= data.Results.length; i++) {
            this.speclialitys = data.Results;
          }
        } else if (data.Status == "Failed") {
          //   this.presentToasts();

        }
      })
  }

  sign(Signupform) {
    console.log("sssssssssssssssssssssssss", this.userUDID)
    this.isSubmitted = "true";
    if (this.sign_data.FirstName == "") {
    }
    else if (this.sign_data.LastName == "") {
    }
    else if (this.sign_data.Registration == "") {
    }
    else if (this.sign_data.Email == "") {
    }
    else if (this.sign_data.Speciality == "") {
    }
    else if (this.sign_data.MobileNo == "") {
    }
    else if (this.sign_data.MobileNo.length != 10) {
    }
    else if (this.sign_data.Password == "") {
    }
    else if (this.sign_data.medical_council == "") {
    }
    else {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: 'Signup Account Please Wait...',
        duration: 5000
      });
      loading.present();
      fetch(this.Api_url + 'users/androidregister', {
        method: 'POST',
        body: JSON.stringify({
          "FirstName": this.sign_data.FirstName,
          "LastName": this.sign_data.LastName,
          "Registration": this.sign_data.Registration,
          "Email": this.sign_data.Email,
          "Speciality": this.sign_data.Speciality,
          "MobileNo": this.sign_data.MobileNo,
          "Password": this.sign_data.Password,
          "Medical-council": this.sign_data.medical_council,
          "Device_Id": this.userUDID,
          "User_Group_Id": "2",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("Register Data", data);
          this.error_mes = data.error;
          loading.dismiss();
          console.log("After Login Server  Responding " + data.error);
          if (data.Status == "Success") {
            console.log("Checking")
            this.presentToast();
            this.navCtrl.push(AccountloginPage);
          } else if (data.Status == "Failed") {
            this.presentToasts();

          }
        })
    }
  }

}