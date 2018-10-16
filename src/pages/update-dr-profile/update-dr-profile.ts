import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, App, ModalController, ToastController } from 'ionic-angular';
import { DrownprofilePage } from '../drownprofile/drownprofile';
import { DatePickerDirective } from 'ion-datepicker';
import { GraduationPage } from '../graduation/graduation';
import { PostgraduationPage } from '../postgraduation/postgraduation';
import { AdditionalqualificationPage } from '../additionalqualification/additionalqualification';
import { AwardsPage } from '../awards/awards';
import { PublicationPage } from '../publication/publication';
import { PresentationPage } from '../presentation/presentation';
import { FellowshipsPage } from '../fellowships/fellowships';
import { DiplomaPage } from '../diploma/diploma';
import { Storage } from '@ionic/storage';
import { AllServiceProvider } from '../../providers/services';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';

@Component({
  selector: 'page-update-dr-profile',
  templateUrl: 'update-dr-profile.html',
  providers: [DatePickerDirective],
})
export class UpdateDrProfilePage {
  isSubmitted = '';
  doctor_id;
  @ViewChild(DatePickerDirective) public datepicker: DatePickerDirective;
  public localDate: Date = new Date();
  public initDate: Date = new Date();
  public initDate2: Date = new Date(2015, 1, 1);
  public minDate: Date = new Date(2018, 2, 31);
  public maxDate: Date = new Date(2018, 11, 10);
  public disabledDates: Date[] = [new Date(2017, 7, 14)];

  value: any;
  public localeString = {
    monday: true,
    weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };
  public min: Date = new Date();
  first_name = "";
  last_name = "";
  date_of_birth = "";
  email = "";
  contact_no = "";
  sex = "";
  website_url = "";
  registration_no;
  medical_council = "";
  medical_council_year = "";
  Api_url = "";
  drprofile;
  update_data = { fname: '', lname: '', sex: '', Email: '', website: '', contact: '', registration: '', medical: '', Medical: '', initDate: '', }
  constructor(public navCtrl: NavController, public services: AllServiceProvider, public toastCtrl: ToastController, public storage: Storage, public navParams: NavParams, public appCtrl: App, public modalCtrl: ModalController) {
    this.Api_url = this.services.user_api;

    this.drprofile = navParams.get('drpro')

    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    });
    this.update_data = {
      fname: '' + this.drprofile.first_name,
      lname: '' + this.drprofile.last_name,
      sex: '' + this.drprofile.sex,
      Email: '' + this.drprofile.email,
      website: '' + this.drprofile.website_url,
      contact: '' + this.drprofile.contact_no,
      registration: '' + this.drprofile.registration_no,
      medical: '' + this.drprofile.medical_council,
      initDate: '' + this.drprofile.date_of_birth,
      Medical: '' + this.drprofile.medical_council_year,
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDrProfilePage');
  }
  updates_profile() {
    this.presentToast();
    this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
  }
  update(updateform) {
    this.isSubmitted = "true";
    fetch(this.Api_url + 'users/android_updatedoctor_profile', {
      method: 'POST',
      body: JSON.stringify({
        "FirstName": this.update_data.fname,
        "LastName": this.update_data.lname,
        "Sex": this.update_data.sex,
        "Email": this.update_data.Email,
        "Website_Url": this.update_data.website,
        "Contact_Number": this.update_data.contact,
        "Registration_Number": this.update_data.registration,
        "Medical_Council": this.update_data.medical,
        "Medical_Council_Year": this.update_data.Medical,
        "Date_Of_Birth": this.update_data.initDate,
        "Doctor_Id": this.doctor_id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status == "Success") {
          // this.presentToast();
          // this.appCtrl.getRootNavs()[0].setRoot(HospitalDashboard);
        } else if (data.Status == "Failed") {
        }
      })
  }

  to() {
    console.log("Connection failed")
  }
  backDoctor() {
    this.navCtrl.push(DrownprofilePage);

  }
  Additional(pageName) {
    this.modalCtrl.create(AdditionalqualificationPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Graduation(pageName) {
    this.modalCtrl.create(GraduationPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Post(pageName) {
    this.modalCtrl.create(PostgraduationPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Awards(pageName) {
    this.modalCtrl.create(AwardsPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Publication(pageName) {
    this.modalCtrl.create(PublicationPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Presentation(pageName) {
    this.modalCtrl.create(PresentationPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  Diploma(pageName) {
    this.modalCtrl.create(DiplomaPage, null, { cssClass: 'inset-modal' })
      .present();
  }
  owship(pageName) {
    this.modalCtrl.create(FellowshipsPage, null, { cssClass: 'inset-modal' })
      .present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Profile Successfully update',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
