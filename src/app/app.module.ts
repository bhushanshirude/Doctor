import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { SocialSharing } from '@ionic-native/social-sharing';
import { DatePickerDirective } from 'ion-datepicker';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { AddPage } from '../pages/add/add';
import { AccountloginPage } from '../pages/accountlogin/accountlogin';
import { AccountsignupPage } from '../pages/accountsignup/accountsignup';
import { AccountforgotpasswordPage } from '../pages/accountforgotpassword/accountforgotpassword';
import { AddPatientPage } from '../pages/add-patient/add-patient';
import { AddHospitalPage } from '../pages/add-hospital/AddHospitalPage';
import { AddLabPage } from '../pages/add-lab/add-lab';
import { AddDrugsPage } from '../pages/add-drugs/add-drugs';
import { AddDiscussionPage } from '../pages/add-discussion/add-discussion';
import { AddeventPage } from '../pages/addevent/addevent';
import { AlumniPage } from '../pages/alumni/alumni';
import { DoctorDashboard } from '../pages/doctor-dashboard/doctor-dashboard';
import { Data } from '../providers/data';
import { DoctorData } from '../providers/doctordata';
import { DrownprofilePage } from '../pages/drownprofile/drownprofile';
import { DatePickerModule } from 'ion-datepicker';
import { EmergencyPage } from '../pages/emergency/emergency';
import { HospitalDashboard } from '../pages/hospital-dashboard/hospital-dashboard';
import { HduPage } from '../pages/hdu/hdu';
import { IcuPage } from '../pages/icu/icu';
import { MyteamPage } from '../pages/myteam/myteam';
import { OpdPage } from '../pages/opd/opd';
import { OtPage } from '../pages/ot/ot';
import { PopoverOptionPage } from '../pages/popover/popover';
import { PopoverPatientPage } from '../pages/popover-patient/popover-patient';
import { PatientsProfileTabs } from '../pages/patients-profile-tabs/patients-profile-tabs';
import { PatientpopoverPage } from '../pages/patientpopover/patientpopover';
import { WardPage } from '../pages/ward/ward';
import { DiscussionPage } from '../pages/discussion/discussion';
import { DrugsPage } from '../pages/drugs/drugs';
import { PatientProfileDetailPage } from '../pages/patient-profile/patient-profile';
import { LabPage } from '../pages/lab/lab';
import { ImagePage } from '../pages/image/image';
import { ConferencePage } from '../pages/conference/conference';
import { LogbookPage } from '../pages/logbook/logbook';
import { SettingPage } from '../pages/setting/setting';
import { SupportPage } from '../pages/support/support';
import { UpdateDrProfilePage } from '../pages/update-dr-profile/update-dr-profile';;
import { PopoverPatients_menu } from '../pages/popover_patients_menu/popoverpatients_menu'
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { DropPage } from '../pages/drop/drop'
@NgModule({
  declarations: [
    MyApp,
    SwipeTabDirective,
    AboutPage,
    AddPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    AddPatientPage,
    AddeventPage,
    AddHospitalPage,
    AddLabPage,
    AlumniPage,
    AddDrugsPage,
    AddDiscussionPage,
    ConferencePage,
    DoctorDashboard,
    DrownprofilePage,
    DiscussionPage,
    DrugsPage,
    DropPage,
    EmergencyPage,
    HospitalDashboard,
    ImagePage,
    LabPage,
    LogbookPage,
    MyteamPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    PatientpopoverPage,
    PopoverPatients_menu,
    OpdPage,
    IcuPage,
    HduPage,
    OtPage,
    SettingPage,
    SupportPage,
    WardPage,
    UpdateDrProfilePage,
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows:
        {
          tabsPlacement: 'top'
        }
      }
    }),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AddPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountloginPage,
    AccountsignupPage,
    AddeventPage,
    AccountforgotpasswordPage,
    AddPatientPage,
    AddHospitalPage,
    AddLabPage,
    AlumniPage,
    AddDrugsPage,
    AddDiscussionPage,
    ConferencePage,
    DoctorDashboard,
    DrownprofilePage,
    DiscussionPage,
    DrugsPage,
    DropPage,
    EmergencyPage,
    HospitalDashboard,
    ImagePage,
    LabPage,
    LogbookPage,
    MyteamPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    PatientpopoverPage,
    PopoverPatients_menu,
    OpdPage,
    IcuPage,
    HduPage,
    OtPage,
    SettingPage,
    SupportPage,
    WardPage,
    UpdateDrProfilePage,
  ],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen, DatePickerDirective, DoctorData, Data,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativePageTransitions
  ]
})
export class AppModule { }
