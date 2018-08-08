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
import { AdditionalqualificationPage } from '../pages/additionalqualification/additionalqualification';
import { AlumniPage } from '../pages/alumni/alumni';
import { AwardsPage } from '../pages/awards/awards';
import { DoctorDashboard } from '../pages/doctor-dashboard/doctor-dashboard';
import { Data } from '../providers/data';
import { DropPage } from '../pages/drop/drop'
import { DoctorData } from '../providers/doctordata';
import { DrownprofilePage } from '../pages/drownprofile/drownprofile';
import { DatePickerModule } from 'ion-datepicker';
import { DiscussionPage } from '../pages/discussion/discussion';
import { DrugsPage } from '../pages/drugs/drugs';
import { EmergencyPage } from '../pages/emergency/emergency';
import { ForumPage } from '../pages/forum/forum';
import { GraduationPage } from '../pages/graduation/graduation';
import { GroupPage } from '../pages/group/group';
import { HospitalDashboard } from '../pages/hospital-dashboard/hospital-dashboard';
import { HduPage } from '../pages/hdu/hdu';
import { IcuPage } from '../pages/icu/icu';
import { MyteamPage } from '../pages/myteam/myteam';
import { LabPage } from '../pages/lab/lab';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { OpdPage } from '../pages/opd/opd';
import { OtPage } from '../pages/ot/ot';
import { PopoverOptionPage } from '../pages/popover/popover';
import { PopoverPatientPage } from '../pages/popover-patient/popover-patient';
import { PostgraduationPage } from '../pages/postgraduation/postgraduation';
import { PatientsProfileTabs } from '../pages/patients-profile-tabs/patients-profile-tabs';
import { PatientpopoverPage } from '../pages/patientpopover/patientpopover';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { PatientProfileDetailPage } from '../pages/patient-profile/patient-profile';
import { PopoverPatients_menu } from '../pages/popover_patients_menu/popoverpatients_menu';
import { PresentationPage } from '../pages/presentation/presentation';
import { PublicationPage } from '../pages/publication/publication'
import { ImagePage } from '../pages/image/image';
import { ConferencePage } from '../pages/conference/conference';
import { LogbookPage } from '../pages/logbook/logbook';
import { SettingPage } from '../pages/setting/setting';
import { SupportPage } from '../pages/support/support';
import { UpdateDrProfilePage } from '../pages/update-dr-profile/update-dr-profile';
import { WardPage } from '../pages/ward/ward';

import { AskPage } from '../pages/ask/ask';
import { DnbPage } from '../pages/dnb/dnb';
import { CarrerPage } from '../pages/carrer/carrer';
import { NeetPage } from '../pages/neet/neet';
import { FellowshipPage } from '../pages/fellowship/fellowship';


import { NeetsPage } from '../pages/neets/neets';
import { DnbsPage } from '../pages/dnbs/dnbs';
import { UpscPage } from '../pages/upsc/upsc';
import { AimsPage } from '../pages/aims/aims';
import { OthersPage } from '../pages/others/others';

import { UsPage } from '../pages/us/us';
import { AusPage } from '../pages/aus/aus';
import { AsiaPage } from '../pages/asia/asia';
import { EuropePage } from '../pages/europe/europe';
import { GulfPage } from '../pages/gulf/gulf';

@NgModule({
  declarations: [
    MyApp,
    SwipeTabDirective,
    AboutPage,
    AddPage,
    AwardsPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    AdditionalqualificationPage,
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
    ForumPage,
    GraduationPage,
    GroupPage,
    HospitalDashboard,
    ImagePage,
    LabPage,
    LogbookPage,
    MyteamPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PostgraduationPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    PatientpopoverPage,
    PopoverPatients_menu,
    PresentationPage,
    PublicationPage,
    QrcodePage,
    OpdPage,
    IcuPage,
    HduPage,
    OtPage,
    SettingPage,
    SupportPage,
    WardPage,
    UpdateDrProfilePage,
    // group
    AskPage,
    DnbPage,
    CarrerPage,
    NeetPage,
    FellowshipPage,
    // group
    NeetsPage,
    DnbsPage,
    UpscPage,
    AimsPage,
    OthersPage,
    // group
    UsPage,
    AusPage,
    AsiaPage,
    EuropePage,
    GulfPage,

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
    AwardsPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountloginPage,
    AccountsignupPage,
    AddeventPage,
    AccountforgotpasswordPage,
    AdditionalqualificationPage,
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
    ForumPage,
    GraduationPage,
    GroupPage,
    HospitalDashboard,
    ImagePage,
    LabPage,
    LogbookPage,
    MyteamPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PostgraduationPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    PatientpopoverPage,
    PopoverPatients_menu,
    PresentationPage,
    PublicationPage,
    QrcodePage,
    OpdPage,
    IcuPage,
    HduPage,
    OtPage,
    SettingPage,
    SupportPage,
    WardPage,
    UpdateDrProfilePage,
    AskPage,
    DnbPage,
    CarrerPage,
    NeetPage,
    FellowshipPage,
    NeetsPage,
    DnbsPage,
    UpscPage,
    AimsPage,
    OthersPage,
    UsPage,
    AusPage,
    AsiaPage,
    EuropePage,
    GulfPage,
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
