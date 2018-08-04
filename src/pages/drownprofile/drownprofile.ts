import { Component } from '@angular/core';
import { NavController, AlertController, App, PopoverController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { UpdateDrProfilePage } from '../update-dr-profile/update-dr-profile';


@Component({
  selector: 'page-drownprofile',
  templateUrl: 'drownprofile.html',
})
export class DrownprofilePage {

  message: string = null;
  link: string = null;
  subject: string = null;
  file: string = null;

  section: string = 'two';
  somethings: any = new Array(20);
  name1: string; public person: { name: string, address: string, education: string, company: string, birthdate?: number };
  dob: any;
  age: any;
  showProfile: boolean;
  constructor(public alertCtrl: AlertController, public popoverCtrl: PopoverController, public navCtrl: NavController, public appCtrl: App, public storage: Storage, public localStorage: IonicStorageModule, private socialSharing: SocialSharing) {
    this.person = { name: undefined, address: undefined, education: undefined, company: undefined, birthdate: undefined };
    this.dob = undefined;
  }


  edit() {
    this.appCtrl.getRootNavs()[0].push(UpdateDrProfilePage)

  }


  // only inclde that and share the social file but you ca't check on pc you can check on mobile.
  sharing() {
    this.socialSharing.share(this.message, this.file, this.subject, this.link).then(() => {
    }).catch(() => { });
  }


}



  // btnClick() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Health Capitol App',
  //     subTitle: 'Doctor ' + this.name1,
  //     buttons: ['Done!']
  //   });
  //   alert.present();

  // }

  // Logout() {
  //   this.storage.set('usertype', '');
  //   this.appCtrl.getRootNavs()[0].push(AccountloginPage)
  // }
  // presentPopover(event: Event) {
  //   let popover = this.popoverCtrl.create(PopoverOptionPage);
  //   popover.present({ ev: event });
  // }

 // ionViewDidLoad() {
  //   let person = JSON.parse(localStorage.getItem('PERSON'));
  //   if (person) {
  //     this.person = person;
  //     this.age = this.getAge(this.person.birthdate);
  //     this.dob = new Date(this.person.birthdate).toISOString();
  //   }
  //   this.person.name = "Dr joshi";
  //   this.person.address = "VImannagar Pune";
  //   this.person.education = "MBBS";
  //   this.person.company = "Deenanath Mangeshkar Hospital";
  //   this.person.birthdate = 31;
  //   localStorage.setItem('PERSON', JSON.stringify(this.person));
  // }

  // reset() {
  //   this.person = { name: null, address: undefined, education: undefined, company: null, birthdate: null };
  //   this.dob = null;
  //   this.showProfile = false;
  // }

  // save() {
  //   this.person.birthdate = new Date(this.dob).getTime();
  //   this.age = this.getAge(this.person.birthdate);
  //   this.showProfile = true;
  //   localStorage.setItem('PERSON', JSON.stringify(this.person));
  // }

  // getAge(birthdate) {
  //   let currentTime = new Date().getTime();
  //   return ((currentTime - birthdate) / 31556952000).toFixed(0);
  // }