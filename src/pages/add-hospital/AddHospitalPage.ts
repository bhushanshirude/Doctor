import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController, ToastController } from 'ionic-angular';
import { DoctorDashboard } from '../doctor-dashboard/doctor-dashboard';
import { Storage } from '@ionic/storage';
import { HospitalDashboard } from '../hospital-dashboard/hospital-dashboard';
import { AllServiceProvider } from '../../providers/services';
@Component({
  selector: 'page-add-hospital',
  templateUrl: 'add-hospital.html',
})

export class AddHospitalPage {
  isSubmitted = false;
  cheked = 0;
  Api_url = "";
  error_mes;
  doctor_id = ''; alumni_group_id = ''; contact_no = ''; created = ''; diagnosis_procidure = ''; doctor_awards = ''; doctor_batch = ''; doctor_consultant_type = '';
  doctor_description = ''; doctor_education = ''; doctor_experience = ''; doctor_memberships = ''; doctor_practice_area = ''; doctor_specialization = ''; email = '';
  first_name = ''; hospital_id = ''; hospital_status = ''; image = ''; last_name = '';
  location = ''; mobile_no = ''; modified = ''; pathologylab_id = '';
  user_group_id = ''; user_id = ''; username = ''; active = '';
  ER: string = "";
  OPD: string = "";
  ICU: string = "";
  ITU: string = "";
  HDU: string = "";
  ICCU: string = "";
  GW: string = "";
  PW: string = "";
  SPW: string = "";
  SDICU: string = "";
  OT: string = "";
  WARD: string = "";
  REF: string = "";
  EXTRA: string = "";
  hospital_data = { Hospitalname: '', City: '', State: '', Country: '', doctor_Id: '', Phonenumber: '', Emergencynumber: '', ER: '', Extra: '', Icu: '', Itu: '', Opd: '', REF: '', hdu: '', Iccu: '', Gw: '', Pw: '', Spw: '', Sdicu: '', Ot: '', Ward: '', };
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public services: AllServiceProvider, public navParams: NavParams, public storage: Storage, public appCtrl: App, public loadingCtrl: LoadingController) {
    this.Api_url = this.services.user_api;
    this.hospital_data = {
      doctor_Id: '',
      Hospitalname: '',
      City: '',
      State: '',
      Country: '',
      Phonenumber: '',
      Emergencynumber: '',
      ER: '',
      Icu: '',
      Itu: '',
      Opd: '',
      hdu: '',
      Iccu: '',
      Gw: '',
      Pw: '',
      Spw: '',
      Sdicu: '',
      Ot: '',
      Ward: '',
      REF: '',
      Extra: ''
    }
  }
  isValidCheckbox = {
    ER: false,
    OPD: false,
    ICU: false,
    ITU: false,
    HDU: false,
    ICCU: false,
    GW: false,
    PW: false,
    SPW: false,
    SDICU: false,
    OT: false,
    WARD: false,
    REF: false,
    EXTRA: false,
  }
  presentToasts() {
    let toast = this.toastCtrl.create({
      message: 'You Can Select Maximum 5 option',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'New Hospital Added Successfully...',
      duration: 5000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
  loginPage() {
    this.navCtrl.setRoot(HospitalDashboard);
  }
  er(val) {

    console.log("ER Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.ER = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.ER = true;
        this.cheked += 1;
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
          this.isValidCheckbox.ER = false;
        }
      }
      else if (val == true) {
        this.isValidCheckbox.ER = false;
        this.cheked -= 1;
        console.log("ER Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log("ER Checkbox False " + this.cheked);
    }
  }

  opd(val) {
    console.log("OPD Checkbox  " + val + " Checked= " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.OPD = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.OPD = true;
        this.cheked += 1;
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.OPD = false;
        this.cheked -= 1;
        console.log("OPD Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log("OPD Checkbox " + val + " Checked:" + this.cheked);
    }
  }

  icu(val) {
    console.log("icu Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);

    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.ICU = false;
    }
    else if (val == false) {
      this.isValidCheckbox.ICU = true;
      this.cheked += 1;
      console.log("ICU Checkbox True " + this.cheked);

      if (this.cheked == 5) {
        console.log("5  Checkbox  full");
      }
    }
    else if (val == true) {
      this.isValidCheckbox.ICU = false;
      this.cheked -= 1;
      console.log("ICU Checkbox False " + this.cheked);
    } else {
      console.log("Else Block");
    }
    console.log(" Checkbox  " + val + " count " + this.cheked);

  }

  itu(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.ITU = false;
    }
    else if (val == false) {
      this.isValidCheckbox.ITU = true;
      this.cheked += 1;
      console.log("ITU Checkbox True " + this.cheked);
      if (this.cheked == 5) {
        console.log("5  Checkbox  full");
      }
    }
    else if (val == true) {
      this.isValidCheckbox.ITU = false;
      this.cheked -= 1;
      console.log("ITU Checkbox False " + this.cheked);
    } else {
      console.log("Else Block");
    }
    console.log(" Checkbox  " + val + " count " + this.cheked);

  }

  hdu(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.HDU = false;
    }
    else if (val == false) {
      this.isValidCheckbox.HDU = true;
      this.cheked += 1;
      console.log("HDU Checkbox True " + this.cheked);
      if (this.cheked == 5) {
        console.log("5  Checkbox  full");
      }
    }
    else if (val == true) {
      this.isValidCheckbox.HDU = false;
      this.cheked -= 1;
      console.log("HDU Checkbox False " + this.cheked);
    } else {
      console.log("Else Block");
    }
    console.log(" Checkbox  " + val + " count " + this.cheked);

  }

  iccu(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.ICCU = false;
    }
    else if (val == false) {
      this.isValidCheckbox.ICCU = true;
      this.cheked += 1;
      console.log("ICCU Checkbox True " + this.cheked);
      if (this.cheked == 5) {
        console.log("5  Checkbox  full");
      }
    }
    else if (val == true) {
      this.isValidCheckbox.ICCU = false;
      this.cheked -= 1;
      console.log("ICCU Checkbox False " + this.cheked);
    } else {
      console.log("Else Block");
    }
    console.log(" Checkbox  " + val + " count " + this.cheked);

  }

  gw(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.GW = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.GW = true;
        this.cheked += 1;
        console.log("GW Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.GW = false;
        this.cheked -= 1;
        console.log("GW Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  pw(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.PW = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.PW = true;
        this.cheked += 1;
        console.log("PW Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.PW = false;
        this.cheked -= 1;
        console.log("PW Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  spw(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.SPW = false;
      // this.cheked -= 1;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.SPW = true;
        this.cheked += 1;
        console.log("SPW Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.SPW = false;
        this.cheked -= 1;
        console.log("SPW Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  sdicu(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.SDICU = false;
      // this.cheked -= 1;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.SDICU = true;
        this.cheked += 1;
        console.log("SDICU Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.SDICU = false;
        this.cheked -= 1;
        console.log("SDICU Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  ot(val) {
    console.log("OPD Checkbox true " + val);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.OT = false;
      // this.cheked -= 1;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.OT = true;
        this.cheked += 1;
        console.log("OT Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.OT = false;
        this.cheked -= 1;
        console.log("OT Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }

      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  ward(val) {
    console.log("OPD Checkbox true " + this.isValidCheckbox.WARD);
    console.log(" Checkbox  " + val + " count " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts(); this.isValidCheckbox.WARD = false;
      //this.cheked -= 1;
    } else {
      if (val == false) {
        this.isValidCheckbox.WARD = true;
        this.cheked += 1;
        console.log("WARD Checkbox True " + this.cheked);
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.WARD = false;
        this.cheked -= 1;
        console.log("WARD Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log(" Checkbox  " + val + " count " + this.cheked);
    }
  }

  ref(val) {
    console.log("REF Checkbox  " + val + " Checked= " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.REF = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.REF = true;
        this.cheked += 1;
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.REF = false;
        this.cheked -= 1;
        console.log("REF Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log("REF Checkbox " + val + " Checked:" + this.cheked);
    }
  }

  Extra(val) {
    console.log("extra Checkbox  " + val + " Checked= " + this.cheked);
    if (this.cheked > 5 && val == false) {
      this.presentToasts();
      this.isValidCheckbox.EXTRA = false;
    }
    else {
      if (val == false) {
        this.isValidCheckbox.EXTRA = true;
        this.cheked += 1;
        if (this.cheked == 5) {
          console.log("5  Checkbox  full");
        }
      }
      else if (val == true) {
        this.isValidCheckbox.EXTRA = false;
        this.cheked -= 1;
        console.log("extra Checkbox False " + this.cheked);
      } else {
        console.log("Else Block");
      }
      console.log("extra Checkbox " + val + " Checked:" + this.cheked);
    }
  }


  ngOnInit() {
    this.get_doctor_details();
  }

  get_doctor_details() {
    this.storage.get('id').then((val) => {
      this.doctor_id = val;
    })
    this.storage.get('alumni_group_id').then((val) => {
      this.alumni_group_id = val;
    })
    this.storage.get('contact_no').then((val) => {
      this.contact_no = val;
    })
    this.storage.get('created').then((val) => {
      this.created = val;
    })
    this.storage.get('diagnosis_procidure').then((val) => {
      this.diagnosis_procidure = val;
    })
    this.storage.get('doctor_awards').then((val) => {
      this.doctor_awards = val;
    })
    this.storage.get('doctor_batch').then((val) => {
      this.doctor_batch = val;
    })
    this.storage.get('doctor_consultant_type').then((val) => {
      this.doctor_consultant_type = val;
    })
    this.storage.get('doctor_description').then((val) => {
      this.doctor_description = val;
    })
    this.storage.get('doctor_education').then((val) => {
      this.doctor_education = val;
    })
    this.storage.get('doctor_experience').then((val) => {
      this.doctor_experience = val;
    })
    this.storage.get('doctor_memberships').then((val) => {
      this.doctor_memberships = val;
    })
    this.storage.get('doctor_practice_area').then((val) => {
      this.doctor_practice_area = val;
    })
    this.storage.get('doctor_specialization').then((val) => {
      this.doctor_specialization = val;
    })
    this.storage.get('email').then((val) => {
      this.email = val;
    })
    this.storage.get('first_name').then((val) => {
      this.first_name = val;
    })
    this.storage.get('hospital_id').then((val) => {
      this.hospital_id = val;
    })
    this.storage.get('hospital_status').then((val) => {
      this.hospital_status = val;
    })
    this.storage.get('image').then((val) => {
      this.image = val;
    })
    this.storage.get('last_name').then((val) => {
      this.last_name = val;
    })
    this.storage.get('location').then((val) => {
      this.location = val;
    })
    this.storage.get('mobile_no').then((val) => {
      this.mobile_no = val;
    })
    this.storage.get('modified').then((val) => {
      this.modified = val;
    })
    this.storage.get('pathologylab_id').then((val) => {
      this.pathologylab_id = val;
    })
    this.storage.get('user_group_id').then((val) => {
      this.user_group_id = val;
    })
    this.storage.get('user_id').then((val) => {
      this.user_id = val;
    })
    this.storage.get('username').then((val) => {
      this.username = val;
    })
    this.storage.get('active').then((val) => {
      this.active = val;
    })

  }

  radio(ev, value) {
    console.log("radio events", ev);
    console.log("radio value", value + " count=>" + this.cheked);
    if (value = "OPD") {
      this.cheked += 1;
    }
    console.log("Total Checkbox:=>" + this.cheked)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHospitalPage');
  }

  backHospitalList() {
    this.appCtrl.getRootNavs()[0].setRoot(DoctorDashboard);
  }

  submit(hospitalform) {
    this.isSubmitted = true;

    this.error_mes = "";
    if (this.hospital_data.Hospitalname == "") {
      console.log('onSubmit Name Null');
    }
    else if (this.hospital_data.City == "") {
      console.log('onSubmit Email Null');
    }
    else if (this.hospital_data.State == "") {
      console.log('onSubmit Email Null');
    }
    else if (this.hospital_data.Country == "") {
      console.log('onSubmit Email Null');
    }
    else if (this.hospital_data.Phonenumber == "") {
      console.log('onSubmit MobileNo Null');
    }
    else if (this.hospital_data.Emergencynumber == "") {
      console.log('onSubmit Password Null');
    } else if (this.cheked >= 6) {
      this.error_mes = "Select Max 5 CheckBox";
    }
    else {
      this.error_mes = "";
      let er = 0;
      if (this.isValidCheckbox.ER == false) {
        er = 0;
      } else {
        er = 1;
      }

      let opd = 0;
      if (this.isValidCheckbox.OPD == false) {
        opd = 0;
      } else {
        opd = 1;
      }

      let icu = 0;
      if (this.isValidCheckbox.ICU == false) {
        icu = 0;
      } else {
        icu = 1;
      }

      let itu = 0;
      if (this.isValidCheckbox.ITU == false) {
        itu = 0;
      } else {
        itu = 1;
      }

      let hdu = 0;
      if (this.isValidCheckbox.HDU == false) {
        hdu = 0;
      } else {
        hdu = 1;
      }

      let iccu = 0;
      if (this.isValidCheckbox.ICCU == false) {
        iccu = 0;
      } else {
        iccu = 1;
      }

      let gw = 0;
      if (this.isValidCheckbox.GW == false) {
        gw = 0;
      } else {
        gw = 1;
      }

      let pw = 0;
      if (this.isValidCheckbox.PW == false) {
        pw = 0;
      } else {
        pw = 1;
      }

      let spw = 0;
      if (this.isValidCheckbox.SPW == false) {
        spw = 0;
      } else {
        spw = 1;
      }

      let sdicu = 0;
      if (this.isValidCheckbox.SDICU == false) {
        sdicu = 0;
      } else {
        sdicu = 1;
      }

      let ot = 0;
      if (this.isValidCheckbox.OT == false) {
        ot = 0;
      } else {
        ot = 1;
      }

      let ward = 0;
      if (this.isValidCheckbox.WARD == false) {
        ward = 0;
      } else {
        ward = 1;
      }

      let ref = 0;
      if (this.isValidCheckbox.REF == false) {
        ref = 0;
      } else {
        ref = 1;
      }

      let extra = 0;
      if (this.isValidCheckbox.EXTRA == false) {
        extra = 0;
      } else {
        extra = 1;
      }
      this.error_mes = "Please Wait Add";
      console.log("id Data", this.doctor_id);
      console.log("ho Data", this.hospital_data.Hospitalname);
      console.log("ci Data", this.hospital_data.City);
      console.log("st Data", this.hospital_data.State);
      console.log("co Data", this.hospital_data.Country);
      console.log("ph Data", this.hospital_data.Phonenumber);
      console.log("ee Data", this.hospital_data.Emergencynumber);
      fetch(this.Api_url + 'users/android_addhospital', {
        method: 'POST',
        body: JSON.stringify({
          "doctor_Id": this.doctor_id,
          "HospitalName": this.hospital_data.Hospitalname,
          "City": this.hospital_data.City,
          "State": this.hospital_data.State,
          "Country": this.hospital_data.Country,
          "PhoneNumber": this.hospital_data.Phonenumber,
          "EmergencyNumber": this.hospital_data.Emergencynumber,
          "Er": er,
          "Icu": icu,
          "Itu": itu,
          "Opd": opd,
          "Hdu": hdu,
          "Iccu": iccu,
          "Gw": gw,
          "Pw": pw,
          "Spw": spw,
          "Sdicu": sdicu,
          "Ot": ot,
          "Ward": ward,
          "Ref": ref,
          "Extra": extra,

        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(data => {
          // {"Status":"Failed","StatusCode":2,"Results":"Sorry. There were problems occur!"}
          console.log("Rahul Data", JSON.stringify(data));
          this.error_mes = data.error;
          console.log(data);
     
          console.log("drop down length " + data.StatusCode);
          if(data.Status!="Failed"){
          if (data.StatusCode == "1") {
            console.log("Checking")
            this.presentToast();
            this.loginPage();
          } else if (data.StatusCode == "2" || data.StatusCode == "5") {

          }
        }else{
          this.error_mes = "Try Again! some thing Wrong "+data.Results;
        }
        }).catch((err) => {
          console.log("server not responding =>"+err);
          this.error_mes = "Try Again! some thing Wrong ";
        })
    }
  }
}
