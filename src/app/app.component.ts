import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav, PopoverController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { AccountloginPage } from '../pages/accountlogin/accountlogin';
import { SupportPage } from '../pages/support/support';
import { DoctorDashboard } from '../pages/doctor-dashboard/doctor-dashboard';
import { App } from 'ionic-angular/components/app/app';
import { DrownprofilePage } from '../pages/drownprofile/drownprofile';
import { HospitalDashboard } from '../pages/hospital-dashboard/hospital-dashboard';
import { MyteamPage } from '../pages/myteam/myteam';
// import { LogbookPage } from '../pages/logbook/logbook';
import { AlumniPage } from '../pages/alumni/alumni';
import { ConferencePage } from '../pages/conference/conference';
import { SettingPage } from '../pages/setting/setting';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { GroupPage } from '../pages/group/group';
import { AllServiceProvider } from '../providers/services';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProfileimagePage } from '../pages/profileimage/profileimage';
import { LogbookPage } from '../pages/logbook/logbook';
import { SharedprofilePage } from '../pages/sharedprofile/sharedprofile';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  doctor_id;
  addquali;
  usertype = '';
  first_name;
  Api_url = "";
  rootPage;
  doctordata;
  array;
  first;
  last;
  speclity;
  logs;
  diploma;
  pg;
  ug;
  publication;
  fellow;
  award;
  scannedCode = null;
  src_path;
  doctor;
  image;
  message;
  noti_count;

  loggedInPages: PageInterface[] = [
    { title: 'Doctor Home', name: 'DoctorDashboard', component: DoctorDashboard, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'Logout', component: AccountloginPage, icon: 'log-out', logsOut: true }
  ];

  constructor(public events: Events, public alertCtrl: AlertController, public appCtrl: App, platform: Platform, statusBar: StatusBar, public storage: Storage,
    public menu: MenuController, public app: App, public barcodeScanner: BarcodeScanner, public services: AllServiceProvider, splashScreen: SplashScreen, public popoverCtrl: PopoverController) {

    this.Api_url = this.services.user_api;
    this.src_path = "assets/imgs/doctor.png";

    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.Notification();
    });

    this.storage.get('doctor_profile_image').then((val) => {
      if (val != "" && val != undefined && val != null) {
        this.doctor = val;
        this.image = this.Api_url + 'profile_pictures/' + this.doctor;
      } else {
        this.src_path = "assets/imgs/doctor.png";
      }
    })

    this.storage.get('usertype').then((val) => {
      if (val == "Doctor") {
        this.storage.get('id').then((val) => {
          this.doctor_id = val;
          this.profile(val);

          this.storage.get('doctor_first_name').then((val) => {
            this.first = val;
          });

          this.storage.get('doctor_last_name').then((val) => {
            this.last = val;
          });
          this.storage.get('doctor_specialization').then((val) => {
            this.speclity = val;
          });
        });
        this.rootPage = HospitalDashboard;
      } else {
        this.usertype = '';
        this.rootPage = AccountloginPage;
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  Notification() {
    fetch(this.Api_url + 'users/android_notifications', {
      method: 'POST',
      body: JSON.stringify({
        "Doctor_Id": this.doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("notification data", data);
        console.log(data);

        if (data.Status == "Success") {
          this.message = data.Results;
          this.noti_count = data.Results.length;
          this.storage.set('Noti_Count', this.noti_count);
          this.storage.set('Noti_Messages', this.message);
        } else if (data.Status == "Failed") {
          console.log("data loading failed")
        }
      })
  }
  ionViewDidLoad() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
  }
  ionViewWillEnter() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      console.log("############Working", this.doctor_id);
    });
  }

  // supportPage() {
  //   this.nav.setRoot(SupportPage);
  // }

  promptAlert() {
    let alert = this.alertCtrl.create({
      title: 'Do want to Logout',
      buttons: [
        {
          text: 'Logout',
          handler: () => {
            alert.dismiss(true);
            return false;
          }
        }, {
          text: 'Cancel',
          handler: () => {
            alert.dismiss(false);
            this.menu.open();
            return false;
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss((data) => {
      console.log('Yes/No', data);
      if (data == true) {
        this.storage.set('usertype', '');
        this.storage.set('login', "false");
        this.nav.setRoot(AccountloginPage);
      }
    });
  }


  dashboard() {
    this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
    this.menu.close();
  }

  profile(doctor_id) {
    this.menu.close();
    if (this.doctor_id != "" && this.doctor_id != undefined && this.doctor_id != null) {
      fetch(this.Api_url + 'users/android_getdoctor_profile', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_Id": this.doctor_id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.Status == "Success") {
            this.array = data.Results;
            this.diploma = data.Results;
            this.pg = data.Results;
            this.ug = data.Results;
            this.fellow = data.Results;
            this.publication = data.Results;
            this.award = data.Results;
            this.addquali = data.Results;
            // this.nav.push(DrownprofilePage, {
            //   doctor: this.array,
            //   dip: this.diploma,
            //   postg: this.pg,
            //   underg: this.ug,
            //   felow: this.fellow,
            //   pub: this.publication,
            //   awards: this.award,
            //   addqulification: this.addquali
            // });
            this.appCtrl.getRootNavs()[0].setRoot(DrownprofilePage, {
              doctor: this.array,
              dip: this.diploma,
              postg: this.pg,
              underg: this.ug,
              felow: this.fellow,
              pub: this.publication,
              awards: this.award,
              addqulification: this.addquali
            });
          } else if (data.Status == "Failed") {
            console.log("data loading failed")
          }
        })
    } else {
      console.log("connection pending")
      // window.location.reload();
    }
  }

  logbook() {
    this.menu.close();
    fetch(this.Api_url + 'userprofiles/android_logbook', {
      method: 'POST',
      body: JSON.stringify({
        "DoctorId": this.doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          this.logs = data.Results;
          this.appCtrl.getRootNavs()[0].setRoot(LogbookPage, {
            logbook: this.logs
          });
        } else if (data.Status == "Failed") {
          console.log("data loading failed")
        }
      })
  }
  logout() {
    this.menu.close();
    this.promptAlert();
  }

  Code() {
    console.log("ssqqrrr");
    this.appCtrl.getRootNavs()[0].setRoot(QrcodePage)
    this.menu.close();
  }

  Conference() {
    this.appCtrl.getRootNavs()[0].setRoot(ConferencePage);
    this.menu.close()
  }

  mydrugs() {
    this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
    this.menu.close()
  }

  myteam() {
    this.appCtrl.getRootNavs()[0].setRoot(MyteamPage);
    this.menu.close();
  }

  Group() {
    this.appCtrl.getRootNavs()[0].setRoot(GroupPage);
    this.menu.close();
  }

  alumni() {
    this.appCtrl.getRootNavs()[0].setRoot(AlumniPage);
    this.menu.close();
  }

  support() {
    // this.appCtrl.getRootNavs()[0].setRoot(SupportPage);
    // this.menu.close();
  }

  Setting() {
    this.appCtrl.getRootNavs()[0].setRoot(SettingPage);
    this.menu.close()
  }
  camera() {
    this.menu.close();
    this.appCtrl.getRootNavs()[0].setRoot(ProfileimagePage);
  }
  scanCode() {
    this.menu.close();
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    });
    // 
  }
  Share_profile() {
    this.menu.close();
    this.appCtrl.getRootNavs()[0].push(SharedprofilePage);
  }

}

