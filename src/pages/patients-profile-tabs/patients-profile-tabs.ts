import { Component } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
// import { DiscussionPage } from '../discussion/discussion';
import { DrugsPage } from '../drugs/drugs';
import { PatientProfileDetailPage } from '../patient-profile/patient-profile';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { LabPage } from '../lab/lab';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ImagePage } from '../image/image';
import { MenuController } from '../../../node_modules/ionic-angular/components/app/menu-controller';
import { AllServiceProvider } from '../../providers/services';
import { NotificationviewPage } from '../notificationview/notificationview';
import { App } from 'ionic-angular/components/app/app';

@Component({
  selector: 'page-patients-profile-tabs',
  templateUrl: 'patients-profile-tabs.html'
})
export class PatientsProfileTabs {

  tab1Root = PatientProfileDetailPage;
  tab2Root = LabPage;
  // tab3Root = DiscussionPage;
  tab4Root = DrugsPage;
  tab5Root = ImagePage;

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;
  first_name;
  last;
  diagnosis;
  hospital;
  h_name;
  patient_age;
  patient_gender;
  pathlab_reports;
  patient_drugs;
  ward_status;
  notifiction_count = 0;
  noti_count;
  message;
  doctor_id;
  Api_url = "";
  constructor(navParams: NavParams, public menuCtrl: MenuController, public appCtrl: App, public services: AllServiceProvider, public navCtrl: NavController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.Api_url = this.services.user_api;
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
    });
    this.storage.get('id').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.doctor_id = val;
      }
    });

    this.storage.get('first_name').then((val) => {
      this.first_name = val;
    });

    this.storage.get('last').then((val) => {
      this.last = val;
    });

    this.storage.get('diagnosis').then((val) => {
      this.diagnosis = val;
    });

    this.storage.get('h_name').then((val) => {
      this.h_name = val;
    });

    this.storage.get('pathlab_reports').then((val) => {
      this.pathlab_reports = val;
    });

    this.storage.get('patient_drugs').then((val) => {
      this.patient_drugs = val;
    });

    this.storage.get('patient_gender').then((val) => {
      this.patient_gender = val;
    });

    this.storage.get('selected').then((val) => {
      this.ward_status = val;
    })

    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewWillEnter() {
    this.call_notification();
  }
  call_notification() {
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
        if (data.Status == "Success") {
          this.message = data.Results;
          this.noti_count = data.Results.length;
          if (this.notifiction_count == this.noti_count) {
            console.log('Not New Notification Message');
            this.notifiction_count = 0;

          } else {
            this.notifiction_count = this.noti_count - this.notifiction_count;
            console.log('New Notification Message ' + this.notifiction_count);
            this.notifiction_count = 1;
          }
          this.storage.set('Noti_Count', this.noti_count);
          this.storage.set('Noti_Messages', this.message);
          
        } else if (data.Status == "Failed") {
          console.log("data loading failed")
        }
      }).catch((err) => {
        console.log("server drop not responding =>");
        return false;
      });
  }
  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)
  }
  ionViewDidLoad() {
  }

  ionViewDidLeave() {
  }

  ngOnInit() {
  }
}
