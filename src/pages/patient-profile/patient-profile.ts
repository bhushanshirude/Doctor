import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { App } from '../../../node_modules/ionic-angular/components/app/app';
import { EmergencyPage } from '../emergency/emergency';
import { MessagePage } from '../message/message';
import { ReportsendPage } from '../reportsend/reportsend';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})
export class PatientProfileDetailPage {
  p_id;
  array;
  Api_url = "";
  data;
  user;
  user_profile;

  first_name;
  last_name;
  contact_no;
  email;
  age_of_patient;
  gender;
  marital_status;
  education;
  profession;
  eating_habit;
  height;
  weight;
  blood_group;
  allergic_to;
  area_locality;
  pin_code;
  city;
  state;
  country;
  emergency_mobile_no;
  aadhaar_no;
  body_mass_index_bmi;
  exercise;
  known_languages;
  known_languages_one;
  known_languages_two;
  hobbies;
  hobbies_one;
  hobbies_two;
  alcohol;
  smoking;
  paan;
  tobacco;
  asthma;
  asthma_since;
  blood_pressure_problem;
  bp_since;
  diabetes_sugar_problem;
  diabetes_since;
  thyroid_problem;
  thyroid_since;
  jaundice;
  jaundice_year;
  tb;
  tb_year;
  previous_surgery;
  previous_year;
  previou_name;
  other_medications;
  accidents;
  accidents_year;
  profile_picture;
  image;
  src_path;
  speaker: any;
  createdCode = "0";
  constructor(public navCtrl: NavController, public navParams: NavParams, public services: AllServiceProvider, public storage: Storage, public appCtrl: App, public modalCtrl: ModalController) {
    this.Api_url = this.services.user_api;
    
    this.storage.get('first_name').then((val) => {
      this.first_name = val;
    });

    this.storage.get('last').then((val) => {
      this.last_name = val;
    });
    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
      this.showqrcode(this.p_id);
      this.dashboard(val);
    });

    this.storage.get('profile_picture').then((val) => {
      this.profile_picture = val;

      this.image = this.Api_url + 'profile_pictures/' + this.profile_picture;
      this.src_path = "assets/img/mittal.jpg";
    });


  }

  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }

  ionViewWillEnter() {
  }

  advice() {
    this.modalCtrl.create(MessagePage, null, { cssClass: 'inset-modal' })
      .present();
  }
  report() {
    this.modalCtrl.create(ReportsendPage, null, { cssClass: 'inset-modal' }).present();
  }

  showqrcode(val) {
    if (val != "" && val != null && val != undefined) {
      this.createdCode = val;
    }
  }

  dashboard(val) {
    this.p_id = val;
    console.log("patient_id", this.p_id)
    fetch(this.Api_url + 'userprofiles/android_viewuserprofile', {
      method: 'POST',
      body: JSON.stringify({
        "patient_Id": this.p_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.StatusCode == "3") {
          this.array = data.Results;

          this.user = data.Results[0].User;
          this.user_profile = data.Results[0].Userprofile;

          this.contact_no = this.user.contact_no;
          this.email = this.user.email

          this.age_of_patient = this.user_profile.age_of_patient;
          this.gender = this.user_profile.gender;
          this.marital_status = this.user_profile.marital_status;
          this.education = this.user_profile.education;
          this.profession = this.user_profile.profession;
          this.eating_habit = this.user_profile.eating_habit;

          this.height = this.user_profile.height;
          this.weight = this.user_profile.weight;
          this.blood_group = this.user_profile.blood_group;
          this.allergic_to = this.user_profile.allergic_to;
          this.area_locality = this.user_profile.area_locality;
          this.pin_code = this.user_profile.pin_code;
          this.city = this.user_profile.city;
          this.state = this.user_profile.state;
          this.country = this.user_profile.country;
          this.emergency_mobile_no = this.user_profile.emergency_mobile_no;
          this.aadhaar_no = this.user_profile.aadhaar_no;
          this.body_mass_index_bmi = this.user_profile.body_mass_index_bmi;
          this.exercise = this.user_profile.exercise;

          this.known_languages = this.user_profile.known_languages;
          this.known_languages_one = this.user_profile.known_languages_one;
          this.known_languages_two = this.user_profile.known_languages_two;

          this.hobbies = this.user_profile.hobbies;
          this.hobbies_one = this.user_profile.hobbies_one;
          this.hobbies_two = this.user_profile.hobbies_two;


          this.alcohol = this.user_profile.alcohol;
          this.smoking = this.user_profile.smoking;
          this.paan = this.user_profile.paan;
          this.tobacco = this.user_profile.tobacco;

          this.asthma = this.user_profile.asthma;
          this.asthma_since = this.user_profile.asthma_since;

          this.blood_pressure_problem = this.user_profile.blood_pressure_problem;
          this.bp_since = this.user_profile.bp_since;

          this.diabetes_sugar_problem = this.user_profile.diabetes_sugar_problem;
          this.diabetes_since = this.user_profile.diabetes_since;

          this.thyroid_problem = this.user_profile.thyroid_problem;
          this.thyroid_since = this.user_profile.thyroid_since;

          this.jaundice = this.user_profile.jaundice;
          this.jaundice_year = this.user_profile.jaundice_year;

          this.tb = this.user_profile.tb;
          this.tb_year = this.user_profile.tb_year;

          this.previous_surgery = this.user_profile.previous_surgery;
          this.previous_year = this.user_profile.previous_year;
          this.previou_name = this.user_profile.previou_name;

          this.other_medications = this.user_profile.other_medications;

          this.accidents = this.user_profile.accidents;
          this.accidents_year = this.user_profile.accidents_year;

        } else if (data.StatusCode == "2") {
          console.log("Server status code Not respond");
        }
      }).catch((err => {
        console.log("server not responding Get Profile Details " + err);
      }))
  }
}
