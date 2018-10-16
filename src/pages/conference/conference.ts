// import { Component, ViewChild } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
// import { DatePickerDirective } from 'ion-datepicker';
// import { App } from '../../../node_modules/ionic-angular/components/app/app';
// import { EmergencyPage } from '../emergency/emergency';
// import { AddconferencePage } from '../addconference/addconference';
// import { Storage } from '@ionic/storage';
// import { AllServiceProvider } from '../../providers/services';
// @Component({
//   selector: 'page-conference',
//   templateUrl: 'conference.html',
//   providers: [DatePickerDirective],
// })
// export class ConferencePage {
//   pet = 'puppies';
//   Api_url = "";
//   @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
//   public localDate: Date = new Date();
//   public initDate: Date = new Date();
//   public initDate2: Date = new Date(2015, 1, 1);
//   public minDate: Date = new Date(2018, 2, 31);
//   public maxDate: Date = new Date(2018, 11, 10);
//   public disabledDates: Date[] = [new Date(2017, 7, 14)];

//   public localeString = {
//     monday: true,
//     weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
//     months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
//   };
//   doctor_id;
//   other;
//   array;
//   public min: Date = new Date();

//   constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App,public services: AllServiceProvider, public storage: Storage) {
//     this.Api_url = this.services.user_api;
//     this.storage.get('id').then((val) => {
//       this.doctor_id = val;
//       this.Get_Doctor(val);
//     })
//   }
//   public ngOnInit() {

//   }
//   public Log(stuff): void {
//     this.datepicker.open();
//     this.datepicker.changed.subscribe(() => console.log('test'));
//     console.log(stuff);
//   }
//   public event(data: Date): void {
//     this.localDate = data;
//   }

//   setDate(date: Date) {
//     console.log(date);
//     this.initDate = date;
//   }

//   ionViewWllEnter(val) {
//     this.Get_Doctor(val);
//   }

//   emergency() {
//     this.appCtrl.getRootNavs()[0].push(EmergencyPage);
//   }



//   Get_Doctor(doctor_id) {
//     console.log("Doctor Send:=>" + doctor_id);
//     fetch(this.Api_url + 'users/android_getconference', {
//       method: 'POST',
//       body: JSON.stringify({
//         "Doctor_Id": doctor_id,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (data.Status == "Success") {
//           for (let i = 0; i <= data.conference_upcomming.length; i++) {
//             this.array = data.conference_upcomming;
//             this.other = data.conference_attended;
//           }
//         } else if (data.Status == "Failed") {
//         }
//       })
//   }
// }

import { Component } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { MenuController } from '../../../node_modules/ionic-angular/components/app/menu-controller';
import { AttentedPage } from '../attented/attented';
import { UpcomingPage } from '../upcoming/upcoming';
import { App } from 'ionic-angular/components/app/app';
import { AddconferencePage } from '../addconference/addconference';
import { EmergencyPage } from '../emergency/emergency';
import { NotificationviewPage } from '../notificationview/notificationview';
import { AllServiceProvider } from '../../providers/services';
// import { ConferPipe } from '../../../pipes/search/conference';
@Component({
  selector: 'page-conference',
  templateUrl: 'conference.html',
})
export class ConferencePage {
  // pipes: [ConferPipe];

  tab1Root = UpcomingPage;
  // tab2Root = LabPage;
  tab3Root = AttentedPage;
  
  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;
  lab_report_count;
  drugs_count;
  message;
  Api_url = "";
  notifiction_count = 0;
  noti_count;
  doctor_id;
  constructor(navParams: NavParams, public menuCtrl: MenuController, public services: AllServiceProvider, public appCtrl: App, public navCtrl: NavController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.Api_url = this.services.user_api;
    this.storage.get('Noti_Count').then((val) => {
      this.notifiction_count = val;
      this.call_notification();
    });
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });

    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
  add() {
    console.log("add conference")
    this.appCtrl.getRootNavs()[0].push(AddconferencePage);
  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  Notification() {
    this.appCtrl.getRootNavs()[0].push(NotificationviewPage)
  }

  clickUpdate() {
    console.log("search Worked");
  }
  ionViewDidLoad() {
  }

  ionViewDidLeave() {
  }

  ngOnInit() {
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
}
