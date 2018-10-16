import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SwipeTabDirective } from '../directives/swipe-tab.directive';
import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';

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
// import { AddeventPage } from '../pages/addevent/addevent';
import { AdditionalqualificationPage } from '../pages/additionalqualification/additionalqualification';
import { AlumniPage } from '../pages/alumni/alumni';
import { AttentedPage } from '../pages/attented/attented';
import { AwardsPage } from '../pages/awards/awards';
import { ChangePage } from '../pages/change/change';
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
// import { PatientpopoverPage } from '../pages/patientpopover/patientpopover';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { PatientProfileDetailPage } from '../pages/patient-profile/patient-profile';
// import { PopoverPatients_menu } from '../pages/popover_patients_menu/popoverpatients_menu';
import { PresentationPage } from '../pages/presentation/presentation';
import { PublicationPage } from '../pages/publication/publication'
import { ImagePage } from '../pages/image/image';
import { ConferencePage } from '../pages/conference/conference';
import { LogbookPage } from '../pages/logbook/logbook';
import { ReportsendPage } from '../pages/reportsend/reportsend';
import { SettingPage } from '../pages/setting/setting';
import { SupportPage } from '../pages/support/support';
import { UpdateDrProfilePage } from '../pages/update-dr-profile/update-dr-profile';
import { WardPage } from '../pages/ward/ward';
import { CommentPage } from '../pages/comment/comment';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { ItuPage } from '../pages/itu/itu';
import { IccuPage } from '../pages/iccu/iccu';
import { GwPage } from '../pages/gw/gw';
import { PwPage } from '../pages/pw/pw';
import { SpwPage } from '../pages/spw/spw';
import { SdicuPage } from '../pages/sdicu/sdicu';
import { RefPage } from '../pages/ref/ref';
import { ExtraPage } from '../pages/extra/extra';
import { ErPage } from '../pages/er/er';
import { AddpatientituPage } from '../pages/addpatientitu/addpatientitu';
import { AddpatienticcuPage } from '../pages/addpatienticcu/addpatienticcu';
import { AddpatientgwPage } from '../pages/addpatientgw/addpatientgw';
import { AddpatienterPage } from '../pages/addpatienter/addpatienter';
import { AddpatientspwPage } from '../pages/addpatientspw/addpatientspw';
import { AddpatientextraPage } from '../pages/addpatientextra/addpatientextra';
import { AddpatientpwPage } from '../pages/addpatientpw/addpatientpw';
import { AddpatientrefPage } from '../pages/addpatientref/addpatientref';
import { AddpatientsdicuPage } from '../pages/addpatientsdicu/addpatientsdicu';
import { MovePage } from '../pages/move/move';
import { SharedpatientPage } from '../pages/sharedpatient/sharedpatient';
import { NotificationviewPage } from '../pages/notificationview/notificationview';
import { SharedprofilePage } from '../pages/sharedprofile/sharedprofile';
import { SharemovePage } from '../pages/sharemove/sharemove';
// longpress
import { LongPressModule } from 'ionic-long-press';
import { ProfileimagePage } from '../pages/profileimage/profileimage';
import { DiplomaPage } from '../pages/diploma/diploma';
import { FellowshipsPage } from '../pages/fellowships/fellowships';
import { AddteamPage } from '../pages/addteam/addteam';
import { AddpatienticuPage } from '../pages/addpatienticu/addpatienticu';
import { AddpatienthduPage } from '../pages/addpatienthdu/addpatienthdu';
import { AddpatientotPage } from '../pages/addpatientot/addpatientot';
import { AddpatientwardPage } from '../pages/addpatientward/addpatientward';
import { AddconferencePage } from '../pages/addconference/addconference';
import { ShareprofiletabsPage } from '../pages/shareprofiletabs/shareprofiletabs';
import { ShareviewdrugsPage } from '../pages/shareviewdrugs/shareviewdrugs';
import { ShareviewlabPage } from '../pages/shareviewlab/shareviewlab';
import { ShareviewprofilePage } from '../pages/shareviewprofile/shareviewprofile';
// import { EtabPage } from '../pages/etab/etab';

// emergency
import { AmbulancePage } from '../pages/ambulance/ambulance';
import { FundsPage } from '../pages/funds/funds';
import { BloodPage } from '../pages/blood/blood';
import { CasualtyPage } from '../pages/casualty/casualty';
import { MessagePage } from '../pages/message/message'
import { AllServiceProvider } from '../providers/services';
import { CustomPage } from '../pages/custom/custom';
import { ShowcommentPage } from '../pages/showcomment/showcomment';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FileTransfer, FileTransferObject, } from '@ionic-native/file-transfer';
// import { FileUploadOptions } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { AllPage } from '../pages/all/all';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';
// import { SearchPipe } from '../../pipes/search/search';
// import { ErPipe } from '../../pipes/search/er';
// import { IcuPipe } from '../../pipes/search/icu';
// import { IccuPipe } from '../../pipes/search/iccu';
// import { OtPipe } from '../../pipes/search/ot';
// import { SdicuPipe } from '../../pipes/search/sdicu';
// import { RefPipe } from '../../pipes/search/ref';
// import { HduPipe } from '../../pipes/search/hdu';
// import { ItuPipe } from '../../pipes/search/itu';
// import { WardPipe } from '../../pipes/search/ward';
// import { SpwPipe } from '../../pipes/search/spw';
// import { GwPipe } from '../../pipes/search/gw';
// import { PwPipe } from '../../pipes/search/pw';
// import { ExtraPipe } from '../../pipes/search/extra';
// import { SortPipe } from '../../pipes/sort/sort'
import { SearchPipe } from '../pipes/search/search';
import { ErPipe } from '../pipes/search/er';
import { IcuPipe } from '../pipes/search/icu';
import { IccuPipe } from '../pipes/search/iccu';
import { OtPipe } from '../pipes/search/ot';
import { SdicuPipe } from '../pipes/search/sdicu';
import { RefPipe } from '../pipes/search/ref';
import { HduPipe } from '../pipes/search/hdu';
import { ItuPipe } from '../pipes/search/itu';
import { WardPipe } from '../pipes/search/ward';
import { SpwPipe } from '../pipes/search/spw';
import { GwPipe } from '../pipes/search/gw';
import { PwPipe } from '../pipes/search/pw';
import { ExtraPipe } from '../pipes/search/extra';
import { PatientdrugsPipe } from '../pipes/search/partientdrugs';
import { MyLabPipe } from '../pipes/search/lab';
import { MyplayerPipe } from '../pipes/search/myteam';
import { DrugsPipe } from '../pipes/search/drugs';
import { ConferPipe } from '../pipes/search/conference';
@NgModule({
  declarations: [
    AboutPage, AllPage,
    AddPage,
    AddteamPage,
    AddpatienthduPage,
    AddpatientotPage,
    AddpatientwardPage,
    AddpatienticuPage,
    AddconferencePage,
    AddpatienticcuPage,
    AddpatientgwPage,
    AddpatienterPage,
    AddpatientspwPage,
    AddpatientextraPage,
    AddpatientpwPage,
    AddpatientrefPage,
    AddpatientsdicuPage,
    AwardsPage,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    AdditionalqualificationPage,
    AddPatientPage,
    AmbulancePage,
    AddHospitalPage,
    AddLabPage,
    AlumniPage,
    AddDrugsPage,
    AddDiscussionPage,
    AttentedPage,
    BloodPage,
    CasualtyPage,
    CustomPage,
    ChangePage,
    CommentPage,
    ConferencePage,
    DoctorDashboard,
    DrownprofilePage,
    DiscussionPage,
    DrugsPage,
    DiplomaPage,
    DropPage,
    EmergencyPage,
    ForumPage,
    FellowshipsPage,
    FundsPage,
    GraduationPage,
    GroupPage,
    HduPage,
    HospitalDashboard,
    ImagePage,
    IcuPage,
    AddpatientituPage,
    LabPage,
    LogbookPage,
    MyApp,
    MessagePage,
    MyteamPage,
    MovePage,
    NotificationviewPage,
    OpdPage,
    OtPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PostgraduationPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    // PatientpopoverPage,
    // PopoverPatients_menu,
    PresentationPage,
    ProfileimagePage,
    PublicationPage,
    QrcodePage,
    ReportsendPage,
    ShowcommentPage,
    SharedpatientPage,
    SharedprofilePage,
    SharemovePage,
    SettingPage,
    SwipeTabDirective,
    SupportPage,
    ShareprofiletabsPage,
    ShareviewdrugsPage,
    ShareviewlabPage,
    ShareviewprofilePage,
    TabsPage,
    UpdateDrProfilePage,
    UpcomingPage,
    WardPage,
    ExtraPage,
    ErPage,
    ItuPage,
    IccuPage,
    GwPage,
    PwPage,
    RefPage,
    SpwPage,
    SdicuPage,
    SearchPipe,
    ExtraPipe,
    ErPipe,
    IcuPipe,
    IccuPipe,
    OtPipe,
    SdicuPipe,
    RefPipe,
    HduPipe,
    WardPipe,
    ItuPipe,
    PwPipe,
    GwPipe,
    SpwPipe,
    PatientdrugsPipe,
    MyLabPipe,
    MyplayerPipe,
    DrugsPipe,
    ConferPipe,
  ],
  imports: [
    BrowserModule,
    DatePickerModule, HttpModule, NgxQRCodeModule, LongPressModule,
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
    AboutPage, AllPage,
    AddPage,
    AddteamPage,
    AddpatienthduPage,
    AddpatientotPage,
    AddpatientwardPage,
    AddpatienticuPage,
    AddconferencePage,
    AddpatienticcuPage,
    AddpatientgwPage,
    AddpatienterPage,
    AddpatientspwPage,
    AddpatientextraPage,
    AddpatientpwPage,
    AddpatientrefPage,
    AddpatientsdicuPage,
    AwardsPage,
    AccountloginPage,
    AccountsignupPage,
    AccountforgotpasswordPage,
    AdditionalqualificationPage,
    AddPatientPage,
    AmbulancePage,
    AddHospitalPage,
    AddLabPage,
    AlumniPage,
    AddDrugsPage,
    AddDiscussionPage,
    AttentedPage,
    BloodPage,
    CustomPage,
    ChangePage,
    CommentPage,
    CasualtyPage,
    ConferencePage,
    DoctorDashboard,
    DrownprofilePage,
    DiscussionPage,
    DrugsPage,
    DiplomaPage,
    DropPage,
    EmergencyPage,
    ForumPage,
    FellowshipsPage,
    FundsPage,
    GraduationPage,
    GroupPage,
    HduPage,
    HospitalDashboard,
    ImagePage,
    IcuPage,
    AddpatientituPage,
    LabPage,
    LogbookPage,
    MyApp,
    MessagePage,
    MyteamPage,
    MovePage,
    NotificationviewPage,
    OpdPage,
    OtPage,
    PopoverOptionPage,
    PopoverPatientPage,
    PostgraduationPage,
    PatientsProfileTabs,
    PatientProfileDetailPage,
    // PatientpopoverPage,
    // PopoverPatients_menu,
    PresentationPage,
    ProfileimagePage,
    PublicationPage,
    QrcodePage,
    ReportsendPage,
    // SwipeTabDirective,
    SharemovePage,
    ShowcommentPage,
    SharedpatientPage,
    SharedprofilePage,
    SettingPage,
    SupportPage,
    ShareprofiletabsPage,
    ShareviewdrugsPage,
    ShareviewlabPage,
    ShareviewprofilePage,
    TabsPage,
    UpdateDrProfilePage,
    UpcomingPage,
    WardPage,
    ExtraPage,
    ErPage,
    ItuPage,
    IccuPage,
    GwPage,
    PwPage,
    RefPage,
    SpwPage,
    SdicuPage,
  ],
  providers: [
    SocialSharing,
    StatusBar, BarcodeScanner,
    SplashScreen, DatePickerDirective, DoctorData, Data,
    AllServiceProvider, FileTransfer,
    // FileUploadOptions,
    FileTransferObject,
    // File,
    Camera,
    UniqueDeviceID,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NativePageTransitions
  ]
})
export class AppModule { }
