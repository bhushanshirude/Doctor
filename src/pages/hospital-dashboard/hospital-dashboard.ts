import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController, ModalController, Content, App } from 'ionic-angular';
import { OpdPage } from '../opd/opd';
import { IcuPage } from '../icu/icu';
import { WardPage } from '../ward/ward';
import { HduPage } from '../hdu/hdu';
import { OtPage } from '../ot/ot';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { PopoverPatientPage } from '../popover-patient/popover-patient';
import { DropPage } from '../drop/drop';
import { AllServiceProvider } from '../../providers/services';
import { ItuPage } from '../itu/itu';
import { IccuPage } from '../iccu/iccu';
import { GwPage } from '../gw/gw';
import { PwPage } from '../pw/pw';
import { SpwPage } from '../spw/spw';
import { SdicuPage } from '../sdicu/sdicu';
import { RefPage } from '../ref/ref';
import { ExtraPage } from '../extra/extra';
import { ErPage } from '../er/er';
import { AllPage } from '../all/all';
import { NotificationviewPage } from '../notificationview/notificationview';

@Component({
  selector: 'page-hospital-dashboard',
  templateUrl: 'hospital-dashboard.html',
})
export class HospitalDashboard {

  @ViewChild(Content) content: Content;
  tab0Root = AllPage;
  tab1Root = OpdPage;
  tab2Root = IcuPage;
  tab3Root = WardPage;
  tab4Root = HduPage;
  tab5Root = OtPage;
  // tab6Root = OtPage
  tab6Root = ItuPage;
  tab7Root = IccuPage;
  tab8Root = GwPage;
  tab9Root = PwPage;
  tab10Root = SpwPage;
  tab11Root = SdicuPage;
  tab12Root = RefPage;
  tab13Root = ExtraPage;
  tab14Root = ErPage;
  dummy_tab: boolean = false;
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;
  data;
  doctor_id = "";
  Api_url = "";
  value;
  hospital_id;
  tab_one;
  tab_two;
  tab_three;
  tab_four;
  tab_five;

  hdu_count;
  icu_count;
  opd_count;
  ot_count;
  ward_count;
  er_count;
  extra_count;
  gw_count;
  iccu_count;
  itu_count;
  pw_count;
  ref_count;
  sdicu_count;
  spw_count;
  message;
  noti_count;
  notifiction_count = 0;
  constructor(public navParams: NavParams, public appCtrl: App, public navCtrl: NavController, public services: AllServiceProvider, public modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.Api_url = this.services.user_api;
    this.dummy_tab = false;
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
    });

    this.storage.get('id').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.doctor_id = val;
        this.call_back_hospital_data();
      }
    });
    this.storage.get('hospital_id').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.hospital_id = val;
        this.call_back_hospital_data();
      }
    })
    this.storage.get('hospital_name').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.value = val;
      }
    })
    this.storage.get('tab_one').then((val) => {
      this.tab_one = val;
    })

    this.storage.get('tab_two').then((val) => {
      this.tab_two = val;
    })

    this.storage.get('tab_three').then((val) => {
      this.tab_three = val;
    })

    this.storage.get('tab_four').then((val) => {
      this.tab_four = val;
      this.dummy_tab = true;
    })

    this.storage.get('tab_five').then((val) => {
      this.tab_five = val;
    })

    if (this.data != "" && this.data != null) {
      this.value = this.data;
    } else {
      this.value = 'Select Hospital';
      this.call_back_hospital_data();
    }
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;

  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPatientPage);
    popover.present({ ev: event });
  }

  ngAfterViewInit() {
    this.dummy_tab = false;
    this.storage.get('id').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.doctor_id = val;
      }
    });
    this.storage.get('hospital_id').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.hospital_id = val;
      }
    })
    this.storage.get('hospital_name').then((val) => {
      if (val != "" && val != null && val != undefined) {
        this.value = val;
      }
    })
    console.log('@@ ngAfterViewInit Hospital id=>' + this.hospital_id + ' doctor => ' + this.doctor_id);

  }
  click(pageName) {
    console.log('Old Hospital id=>' + this.hospital_id + ' doctor => ' + this.doctor_id);
    let profileModal = this.modalCtrl.create(DropPage, { item: this.doctor_id }, { cssClass: 'inset-modal' });
    profileModal.onDidDismiss(data => {
      if (data.data) {
        this.storage.set('hospital_name', data.data);
        this.value = data.data;

      }
      if (data.data1) {
        this.hospital_id = data.data1;
        this.storage.set('hospital_id', data.data1);
        this.storage.set('R_id', data.data1);
        this.dummy_tab = true;
      } else {
        console.log('return Else Block=>' + data);
      }
      this.call_back_hospital_data();
      this.dummy_tab = true;
      this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard)

    });
    profileModal.present();
  }

  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)
  }

  ionViewWillEnter() {
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
    });

    this.call_back_hospital_data();
    // }
    // this.load();
    this.call_notification();
  }
  ionViewCanEnter() {

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
        console.log("//////////////////////// data", data);
        if (data.Status == "Success") {
          this.message = data.Results;
          this.noti_count = data.Results.length;
          if (this.notifiction_count == this.noti_count) {
            console.log('Not New Notification Message');
            this.notifiction_count = 0;

          } else {
            this.notifiction_count = this.noti_count - this.notifiction_count;
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

  get_data_hide() {
    this.dummy_tab = false;

    if (this.tab_two) {

      this.dummy_tab = true;
    } else {

      this.dummy_tab = false;
    }
    return this.dummy_tab;
  }

  call_back_hospital_data() {
    // this.storage.get('id').then((val) => {
    //   if (val != "" && val != null && val != undefined) {
    //     this.doctor_id = val;
    //   }
    // });
    // this.storage.get('hospital_id').then((val) => {
    //   if (val != "" && val != null && val != undefined) {
    //     console.log("hospital_id", val);
    //     this.hospital_id = val;
    //   }
    // });
    console.log("!!!!!!!!!!!!!!!!!!!Docor_id", this.doctor_id);
    console.log("!!!!!!!!!!!!!!!!!!!hospital_id", this.hospital_id);
    if (this.doctor_id != "" && this.doctor_id != undefined && this.doctor_id != null && this.hospital_id != "" && this.hospital_id != undefined && this.hospital_id != null) {
      fetch(this.Api_url + 'users/android_getpatients', {
        method: 'POST',
        body: JSON.stringify({
          "doctor_Id": this.doctor_id,
          "hospital_Id": this.hospital_id
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log("@@Success data seperate", data.Results);
          if (data.Results.Status == "Success") {
            this.storage.set('patient_hdu', data.Results.hdu);
            this.storage.set('patient_icu', data.Results.icu);
            this.storage.set('patient_opd', data.Results.opd);
            this.storage.set('patient_ot', data.Results.ot);
            this.storage.set('patient_ward', data.Results.ward);
            this.storage.set('patient_er', data.Results.er);
            this.storage.set('patient_extra', data.Results.extra);
            this.storage.set('patient_gw', data.Results.gw);
            this.storage.set('patient_iccu', data.Results.iccu);
            this.storage.set('patient_itu', data.Results.itu);
            this.storage.set('patient_pw', data.Results.pw);
            this.storage.set('patient_ref', data.Results.ref);
            this.storage.set('patient_sdicu', data.Results.sdicu);
            this.storage.set('patient_spw', data.Results.spw);

            this.hdu_count = data.Results.hdv_cnt;
            this.icu_count = data.Results.icu_cnt;
            this.opd_count = data.Results.opd_cnt;
            this.ot_count = data.Results.ot_cnt;
            this.ward_count = data.Results.ward_cnt;
            this.er_count = data.Results.er_cnt;
            this.extra_count = data.Results.extra_cnt;
            this.gw_count = data.Results.gw_cnt;
            this.iccu_count = data.Results.iccu_cnt;
            this.itu_count = data.Results.itu_cnt;
            this.pw_count = data.Results.pw_cnt;
            this.ref_count = data.Results.ref_cnt;
            this.sdicu_count = data.Results.sdicu_cnt;
            this.spw_count = data.Results.spw_cnt;


            this.storage.set('tab_one', data.Results.selected_ward[0]);
            this.storage.set('tab_two', data.Results.selected_ward[1]);
            this.storage.set('tab_three', data.Results.selected_ward[2]);
            this.storage.set('tab_four', data.Results.selected_ward[3]);
            this.storage.set('tab_five', data.Results.selected_ward[4]);
          } else if (data.Status == "Failed") {
            console.log("please check server error")
          }
        }).catch((err) => {
          console.log("server drop not responding =>");
          return false;
        });
    } else {
      console.log("@@ Hospital Id && doctor id Not present");
      this.dummy_tab = false;
    }
  }
}



