import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-shareviewprofile',
  templateUrl: 'shareviewprofile.html',
})
export class ShareviewprofilePage {
  profile;
  profiles;
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
  p_id;
  Api_url = "";
  createdCode = "0";
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public navParams: NavParams, public storage: Storage) {
    this.Api_url = this.services.user_api;
    this.storage.get('pat_first_name').then((val) => {
      this.first_name = val;
    });
    this.storage.get('pat_last_name').then((val) => {
      this.last_name = val;
    });
    this.storage.get('Age').then((val) => {
      this.age_of_patient = val;
    })

    this.storage.get('pat_id').then((val) => {
      this.p_id = val;
      this.showqrcode(this.p_id);
    })

    this.storage.get('User').then((val) => {
      this.profile = val;
      this.contact_no = this.profile.contact_no;
      this.email = this.profile.email
      this.profile_picture = this.profile.profile_picture;
      this.image = this.Api_url + 'profile_pictures/' + this.profile_picture;
    })

    this.storage.get('profile_datas').then((val) => {

      if (val != "" && val != null && val != undefined) {
        this.profiles = val.userprofiles;
        
        this.gender = this.profiles.gender;
        this.marital_status = this.profiles.marital_status;
        this.education = this.profiles.education;
        this.profession = this.profiles.profession;
        this.eating_habit = this.profiles.eating_habit;

        this.height = this.profiles.height;
        this.weight = this.profiles.weight;
        this.blood_group = this.profiles.blood_group;
        this.allergic_to = this.profiles.allergic_to;
        this.area_locality = this.profiles.area_locality;
        this.pin_code = this.profiles.pin_code;
        this.city = this.profiles.city;
        this.state = this.profiles.state;
        this.country = this.profiles.country;
        this.emergency_mobile_no = this.profiles.emergency_mobile_no;
        this.aadhaar_no = this.profiles.aadhaar_no;
        this.body_mass_index_bmi = this.profiles.body_mass_index_bmi;
        this.exercise = this.profiles.exercise;

        this.known_languages = this.profiles.known_languages;
        this.known_languages_one = this.profiles.known_languages_one;
        this.known_languages_two = this.profiles.known_languages_two;

        this.hobbies = this.profiles.hobbies;
        this.hobbies_one = this.profiles.hobbies_one;
        this.hobbies_two = this.profiles.hobbies_two;


        this.alcohol = this.profiles.alcohol;
        this.smoking = this.profiles.smoking;
        this.paan = this.profiles.paan;
        this.tobacco = this.profiles.tobacco;

        this.asthma = this.profiles.asthma;
        this.asthma_since = this.profiles.asthma_since;

        this.blood_pressure_problem = this.profiles.blood_pressure_problem;
        this.bp_since = this.profiles.bp_since;

        this.diabetes_sugar_problem = this.profiles.diabetes_sugar_problem;
        this.diabetes_since = this.profiles.diabetes_since;

        this.thyroid_problem = this.profiles.thyroid_problem;
        this.thyroid_since = this.profiles.thyroid_since;

        this.jaundice = this.profiles.jaundice;
        this.jaundice_year = this.profiles.jaundice_year;

        this.tb = this.profiles.tb;
        this.tb_year = this.profiles.tb_year;

        this.previous_surgery = this.profiles.previous_surgery;
        this.previous_year = this.profiles.previous_year;
        this.previou_name = this.profiles.previou_name;

        this.other_medications = this.profiles.other_medications;

        this.accidents = this.profiles.accidents;
        this.accidents_year = this.profiles.accidents_year;
      } else {
        // this.profiles = val;
        console.log(" User profile Not Found data")
      }
    })
  }
  showqrcode(val) {
    if (val != "" && val != null && val != undefined) {
      this.createdCode = val;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareviewprofilePage');
  }

}
