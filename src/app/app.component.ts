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
import { LogbookPage } from '../pages/logbook/logbook';
import { AlumniPage } from '../pages/alumni/alumni';
import { ConferencePage } from '../pages/conference/conference';
import { SettingPage } from '../pages/setting/setting';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { GroupPage } from '../pages/group/group';


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
  [x: string]: any;

  @ViewChild(Nav) nav: Nav;
  usertype = '';
  rootPage//: any = AccountloginPage;
  loggedInPages: PageInterface[] = [
    { title: 'Doctor Home', name: 'DoctorDashboard', component: DoctorDashboard, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'Logout', component: AccountloginPage, icon: 'log-out', logsOut: true }
  ];
  constructor(
    public events: Events, public alertCtrl: AlertController, public appCtrl: App,
    platform: Platform, statusBar: StatusBar, public storage: Storage,
    public menu: MenuController, public app: App, splashScreen: SplashScreen, public popoverCtrl: PopoverController) {

    this.storage.get('usertype').then((val) => {
      console.log('Login User1:=>', val);
      if (val == "Doctor") {
        this.usertype = 'Doctor';
        this.rootPage = HospitalDashboard;

      } if (val == "Patient") {
        this.usertype = 'Patient';

      } else {
        this.usertype = '';
        this.rootPage = AccountloginPage;

      }
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      console.log('Login User5:=>', this.usertype);
    });
  }

  supportPage() {
    this.nav.setRoot(SupportPage);
  }

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
        this.nav.setRoot(AccountloginPage);
      }
    });
  }


  dashboard() {
    this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
    this.menu.close();
  }

  profile() {
    this.appCtrl.getRootNavs()[0].setRoot(DrownprofilePage);
    this.menu.close();
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

  logbook() {
    this.appCtrl.getRootNavs()[0].setRoot(LogbookPage);
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

  // clickUpdate() {
  //   this.appCtrl.getRootNavs()[0].setRoot(UpdateDrProfilePage);
  //   this.menu.close();
  // }







}

