import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConferencePage } from '../conference/conference';
import { AllServiceProvider } from '../../providers/services';

@Component({
  selector: 'page-addconference',
  templateUrl: 'addconference.html',
})
export class AddconferencePage {
  doctor_id;
  isSubmitted = "";
  Api_url = "";
  conference_data = {
    Conference_Title: '', Conference_Abbreviation: '', Conference_Website_Address: '', Conference_Venue: '', Conference_Street: '', Conference_City: '', Conference_County_State: '', Conference_Postcode_ZIP: '', Conference_Country: '', Number_of_Places_Available: '', Speciality: '', Keywords: '',
    Organiser_First_name: '',
    Organiser_Last_name: '',
    Organiser_Email: '',
    Organiser_Phone: '',
    Organiser_URL: '',

    Hotel_Name: '',
    Hotel_Street: '',
    Hotel_City: '',
    Hotel_County: '',
    Hotel_Postcode_ZIP: '',
    Hotel_Web_Address: '',
    Hotel_Email_Address: '',
    Discount_Code: '',
    Start_Date: '',
    End_Date: '',
    Abstract_Deadline: '',
    cme_accrediated: '',
  }


  constructor(public navCtrl: NavController, public services: AllServiceProvider, public appCtrl: App, public toastCtrl: ToastController, public navParams: NavParams, public storage: Storage) {
    this.Api_url = this.services.user_api;
    this.conference_data = {
      Conference_Title: '',
      Conference_Abbreviation: '',
      Start_Date: '',
      End_Date: '',
      Abstract_Deadline: '',
      Conference_Website_Address: '',
      Conference_Venue: '',
      Conference_Street: '',
      Conference_City: '',
      Conference_County_State: '',
      Conference_Postcode_ZIP: '',
      Conference_Country: '',
      Number_of_Places_Available: '',
      Speciality: '',
      Keywords: '',
      cme_accrediated: '',

      Organiser_First_name: '',
      Organiser_Last_name: '',
      Organiser_Email: '',
      Organiser_Phone: '',
      Organiser_URL: '',

      Hotel_Name: '',
      Hotel_Street: '',
      Hotel_City: '',
      Hotel_County: '',
      Hotel_Postcode_ZIP: '',
      Hotel_Web_Address: '',
      Hotel_Email_Address: '',
      Discount_Code: '',
    }
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })

  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Conference Added Successfully...',
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddconferencePage');
  }
  Reset() {

  }
  submit(conferenceform) {
    this.isSubmitted = "true";
    if (this.conference_data.Conference_Title == "") {
    }
    else if (this.conference_data.Conference_Abbreviation == "") {
    }
    else if (this.conference_data.Start_Date == "") {
    }
    else if (this.conference_data.End_Date == "") {
    }
    else if (this.conference_data.Abstract_Deadline == "") {
    }
    else if (this.conference_data.cme_accrediated == "") {
    }
    else if (this.conference_data.Conference_Website_Address == "") {
    }
    else if (this.conference_data.Conference_Venue == "") {
    }
    else if (this.conference_data.Conference_Street == "") {
    }
    else if (this.conference_data.Conference_City == "") {
    }
    else if (this.conference_data.Conference_County_State == "") {
    }
    else if (this.conference_data.Conference_Postcode_ZIP == "") {
    }
    else if (this.conference_data.Conference_Country == "") {
    }
    else if (this.conference_data.Number_of_Places_Available == "") {
    }
    else if (this.conference_data.Speciality == "") {
    }
    else if (this.conference_data.Keywords == "") {
    }
    else if (this.conference_data.Organiser_First_name == "") {
    }
    else if (this.conference_data.Organiser_Last_name == "") {
    }
    else if (this.conference_data.Organiser_Email == "") {
    }
    else if (this.conference_data.Organiser_Phone == "") {
    }
    else if (this.conference_data.Organiser_URL == "") {
    }
    else if (this.conference_data.Hotel_Name == "") {
    }
    else if (this.conference_data.Hotel_Street == "") {
    }
    else if (this.conference_data.Hotel_City == "") {
    }
    else if (this.conference_data.Hotel_County == "") {
    }
    else if (this.conference_data.Hotel_Postcode_ZIP == "") {
    }
    else if (this.conference_data.Hotel_Web_Address == "") {
    }
    else if (this.conference_data.Hotel_Email_Address == "") {
    }
    else if (this.conference_data.Discount_Code == "") {
    }

    else {
      console.log("Working properly")
      fetch(this.Api_url + 'users/android_addconference', {
        method: 'POST',
        body: JSON.stringify({
          "Doctor_Id": this.doctor_id,
          "Conference_Title": this.conference_data.Conference_Title,
          "Conference_Abbreviation": this.conference_data.Conference_Abbreviation,
          "Start_Date": this.conference_data.Start_Date,
          "End_Date": this.conference_data.End_Date,
          "Abstract_Deadline": this.conference_data.Abstract_Deadline,
          "Conference_Website_Address": this.conference_data.Conference_Website_Address,
          "Conference_Venue": this.conference_data.Conference_Venue,
          "Conference_Street": this.conference_data.Conference_Street,
          "Conference_City": this.conference_data.Conference_City,
          "Conference_County_State": this.conference_data.Conference_County_State,
          "Conference_Postcode_ZIP": this.conference_data.Conference_Postcode_ZIP,
          "Conference_Country": this.conference_data.Conference_Country,
          "Number_of_Places_Available": this.conference_data.Number_of_Places_Available,
          "Speciality": this.conference_data.Speciality,
          "Keywords": this.conference_data.Keywords,
          "cme_accrediated": this.conference_data.cme_accrediated,
          "Organiser_First_name": this.conference_data.Organiser_First_name,
          "Organiser_Last_name": this.conference_data.Organiser_Last_name,
          "Organiser_Email": this.conference_data.Organiser_Email,
          "Organiser_Phone": this.conference_data.Organiser_Phone,
          "Organiser_URL": this.conference_data.Organiser_URL,

          "Hotel_Name": this.conference_data.Hotel_Name,
          "Hotel_Street": this.conference_data.Hotel_Street,
          "Hotel_City": this.conference_data.Hotel_City,
          "Hotel_County": this.conference_data.Hotel_County,
          "Hotel_Postcode_ZIP": this.conference_data.Hotel_Postcode_ZIP,
          "Hotel_Web_Address": this.conference_data.Hotel_Web_Address,
          "Hotel_Email_Address": this.conference_data.Hotel_Email_Address,
          "Discount_Code": this.conference_data.Discount_Code,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.Status == "Success") {
            // console.log("Checking")
            this.presentToast();
            this.appCtrl.getRootNavs()[0].setRoot(ConferencePage);
          } else if (data.Status == "Failed") {

          }
        })
    }
  }
}
// }
