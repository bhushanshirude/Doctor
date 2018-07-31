import { Component } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
import { DiscussionPage } from '../discussion/discussion';
import { DrugsPage } from '../drugs/drugs';
import { PatientProfileDetailPage } from '../patient-profile/patient-profile';
import { IonicStorageModule, Storage } from '@ionic/storage';
// import { PopoverPatients_menu } from '../popover_patients_menu/popoverpatients_menu';
import { LabPage } from '../lab/lab';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { PopoverOptionPage } from '../popover/popover';
import { ImagePage } from '../image/image';
import { PatientpopoverPage } from '../patientpopover/patientpopover';
// @IonicPage({
//   segment: 'partial-home/:type'
// })
@Component({
  selector: 'page-patients-profile-tabs',
  templateUrl: 'patients-profile-tabs.html'
})
export class PatientsProfileTabs {
  tab1Root = PatientProfileDetailPage;
  tab2Root = LabPage;
  tab3Root = DiscussionPage;
  tab4Root = DrugsPage;
  tab5Root = ImagePage;

  showIcons: boolean = true;
  showTitles: boolean = true;
  pageTitle: string = 'Partial Home';
  type = "titles-only";
  mySelectedIndex: number;

  constructor(navParams: NavParams, public navCtrl: NavController, public popoverCtrl: PopoverController, public storage: Storage, public localStorage: IonicStorageModule) {
    this.showTitles = true;
    this.showIcons = false;
    this.pageTitle += ' - Titles only';

    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PatientpopoverPage);
    popover.present({ ev: event });
  }

  //Show popover menu
  optionsPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverOptionPage);
    popover.present({ ev: event });
  }


}
