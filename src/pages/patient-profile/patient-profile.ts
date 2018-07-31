import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-patient-profile',
  templateUrl: 'patient-profile.html'
})
export class PatientProfileDetailPage {
  speaker: any;
  @Input('progress') progress;
  myDate = '2018-06-05';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = new Date().toISOString();

    this.progress = 56;
  }

  ionViewWillEnter() {
    // this.dataProvider.load().subscribe((data: any) => {
    //   if (data && data.speakers) {
    //     for (const speaker of data.speakers) {
    //       if (speaker && speaker.id === this.navParams.data.speakerId) {
    //         this.speaker = speaker;
    //         break;
    //       }
    //     }
    //   }
    // });

  }

  // goToSessionDetail(session: any) {
  //   this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  // }
}
