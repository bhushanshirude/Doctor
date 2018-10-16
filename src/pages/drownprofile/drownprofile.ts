import { Component, Input } from '@angular/core';
import { NavController, AlertController, App, PopoverController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { UpdateDrProfilePage } from '../update-dr-profile/update-dr-profile';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { AllServiceProvider } from '../../providers/services';


@Component({
  selector: 'page-drownprofile',
  templateUrl: 'drownprofile.html',
})
export class DrownprofilePage {
  @Input() src_path: string;
  @Input() default: string;
  message: string = null;
  link: string = null;
  subject: string = null;
  file: string = null;
  first_name;
  last_name;
  date_of_birth;
  email;
  contact_no;
  sex;
  website_url;
  registration_no;
  medical_council;
  medical_council_year;
  doctordata;
  doctors;
  diploma;
  Dip;
  pg;
  ug;
  fellow;
  award;
  additional;
  publication;
  publi;
  awards;
  fellows;
  under;
  post;
  Api_url = "";
  doctor_id;
  array;
  createdCode = "0";
  image;
  addquli;

  constructor(public alertCtrl: AlertController, public services: AllServiceProvider, public navParams: NavParams, public popoverCtrl: PopoverController, public navCtrl: NavController, public appCtrl: App, public storage: Storage, public localStorage: IonicStorageModule, private socialSharing: SocialSharing) {
    this.Api_url = this.services.user_api;

    this.storage.get('id').then((val) => {
      this.doctor_id = val;
      this.showqrcode(this.doctor_id);
    });
    this.doctordata = navParams.get('doctor');
    this.doctors = this.doctordata;
    // console.log("RRRRRRRRRRRRRRRR", this.doctordata)

    this.diploma = navParams.get('dip')
    this.Dip = this.diploma.alumni_data_diploma;

    this.pg = navParams.get('postg')
    this.post = this.pg.alumni_data_pg;

    this.ug = navParams.get('underg')
    this.under = this.ug.alumni_data_ug;

    this.fellow = navParams.get('felow')
    this.fellows = this.fellow.alumni_data_fellow;

    this.award = navParams.get('awards')
    this.awards = this.award.data_awards_presentations;

    this.publication = navParams.get('pub')
    this.publi = this.publication.data_publications;

    this.additional = navParams.get('addqulification');
    this.addquli = this.additional.alumni_data_additional;

    this.storage.set('doctor_fname', this.doctordata.User.first_name);
    this.storage.set('doctor_lname', this.doctordata.User.last_name);
    this.storage.set('doctor_sname', this.doctordata.User.doctor_specialization);

    this.image = this.Api_url + 'profile_pictures/' + this.doctordata.User.profile_picture;
    this.src_path = "assets/imgs/doctor.png";
    // console.log("Abhijeet", this.image)
    this.storage.set('doctor_profile_image', this.doctordata.User.profile_picture);
  }

  showqrcode(val) {
    if (val != "" && val != null && val != undefined) {
      // console.log("patient_showqrcode_id====>>>", val)
      this.createdCode = val;
    }
  }

  edit() {
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
          this.array = data.Results.User;
          this.appCtrl.getRootNavs()[0].setRoot(UpdateDrProfilePage, {
            drpro: this.array
          })
        } else if (data.Status == "Failed") {
        }
      });
  }
  sharing() {
    var teUrl = "Playing on FantasyCraz is as easy as it gets, Download the app now and play with the best! & use my invite code:  " + " to get a Cash Bonus of Rs.30 Let the Games begin.\n http://fantasycraz.com/";
    this.socialSharing.share(teUrl, 'Fantasy Craz', null, this.link)
      .then(() => {
      }).catch(() => {
        setTimeout(() => {
        }, 0);
      });
  }
  // sharing() {
  //   this.socialSharing.share(this.message, this.file, this.subject, this.link).then(() => {
  //   }).catch(() => { });
  // }
}