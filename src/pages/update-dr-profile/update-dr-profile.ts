import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, App, ModalController } from 'ionic-angular';
import { DrownprofilePage } from '../drownprofile/drownprofile';
import { DatePickerDirective } from 'ion-datepicker';
import { GraduationPage } from '../graduation/graduation';
import { PostgraduationPage } from '../postgraduation/postgraduation';
import { AdditionalqualificationPage } from '../additionalqualification/additionalqualification';


@Component({
  selector: 'page-update-dr-profile',
  templateUrl: 'update-dr-profile.html',
  providers: [DatePickerDirective],
})
export class UpdateDrProfilePage {
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateDrProfilePage');
  }
  backDoctor() {
    this.appCtrl.getRootNavs()[0].setRoot(DrownprofilePage);

  }
  Additional() {
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
  Awards() {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAA")
  }
  Publication() {
    console.log("PPPPPPPPPPPPPPuuuuuuuuuuuu")
  }
  Presentation() {
    console.log("PPPPPPPPPPPPPTTTTTTTTTT")
  }
}
