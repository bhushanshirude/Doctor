import { Component } from '@angular/core';
import { NavController, NavParams, App, ModalController, ViewController } from 'ionic-angular';
import { EmergencyPage } from '../emergency/emergency';
import { AllServiceProvider } from '../../providers/services';
import { Storage } from '@ionic/storage';
import { CustomPage } from '../custom/custom';

@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  p_id;
  array;
  Api_url = "";
  d_id;
  arrays;
  user;
  user_profile;
  first_name;
  last_name;
  contact_no;
  email;
  age_of_patient;
  heightcm;
  mothers_name;
  fathers_name;
  date_of_birth;
  weightkg;
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
  dental_problems;
  consciousness;
  orientation;
  built;
  deformity;
  urine;
  bowel;
  sleep;
  temperature;
  systolic;
  diastolic;
  respiration;
  rate;
  pulse;
  pressure;
  pet = 'kittens';
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public storage: Storage, public navParams: NavParams, public services: AllServiceProvider, public appCtrl: App) {
    this.Api_url = this.services.user_api;

    this.storage.get('opt_id').then((val) => {
      this.p_id = val;
      this.dashboard(val);
    })

    this.storage.get('id').then((val) => {
      this.d_id = val;
      this.custom()
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  emergency() {
    this.appCtrl.getRootNavs()[0].push(EmergencyPage);
  }
  question() {
    this.modalCtrl.create(CustomPage, null, { cssClass: 'inset-modal' })
      .present();
  }

  dashboard(val) {
    this.p_id = val;
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
        console.log("status", data);
        if (data.StatusCode == "3") {
          this.array = data.Results;
          this.user = data.Results[0].User;
          this.user_profile = data.Results[0].Userprofile;

          this.first_name = this.user.first_name;
          this.last_name = this.user.last_name;
          this.mothers_name = this.user_profile.mothers_name;
          this.fathers_name = this.user_profile.fathers_name;
          this.date_of_birth = this.user_profile.date_of_birth;
          this.gender = this.user_profile.gender;
          this.marital_status = this.user_profile.marital_status;
          this.education = this.user_profile.education;
          this.profession = this.user_profile.profession;
          this.eating_habit = this.user_profile.eating_habit;
          this.heightcm = this.user_profile.heightcm;
          this.weightkg = this.user_profile.weightkg;
          this.blood_group = this.user_profile.blood_group;
          this.allergic_to = this.user_profile.allergic_to;
          this.pin_code = this.user_profile.pin_code;
          this.area_locality = this.user_profile.area_locality;
          this.city = this.user_profile.city;
          this.state = this.user_profile.state;
          this.country = this.user_profile.country;
          this.email = this.user.email;
          this.contact_no = this.user.contact_no;
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
          this.dental_problems = this.user_profile.dental_problems;
          this.consciousness = this.user_profile.consciousness;
          this.orientation = this.user_profile.orientation;
          this.built = this.user_profile.built;
          this.deformity = this.user_profile.deformity;
          this.urine = this.user_profile.urine;
          this.bowel = this.user_profile.bowel;
          this.sleep = this.user_profile.sleep;
          this.temperature = this.user_profile.temperature;
          this.systolic = this.user_profile.systolic;
          this.diastolic = this.user_profile.diastolic;
          this.respiration = this.user_profile.respiration;
          this.rate = this.user_profile.rate;
          this.pulse = this.user_profile.pulse;
          this.pressure = this.user_profile.pressure;

          console.log("RRRRRRRRRRRRRR", this.pressure)

        } else if (data.StatusCode == "2") {

        }
      }).catch((err => {
        console.log("server not responding Get Profile Details " + err);
      }))
  }

  custom() {
    fetch(this.Api_url + 'EditableQuestions/android_geteditable_questions', {
      method: 'POST',
      body: JSON.stringify({
        "PatientId": this.p_id,
        "DoctorId": this.d_id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          this.arrays = data.Results;
          console.log('android_viewuserprofile', this.arrays);
        } else if (data.StatusCode == "2") {

        }
      }).catch((err => {
        console.log("server not responding Get Profile Details " + err);
      }))
  }
}
