import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { GroupPage } from '../group/group';
import { App } from '../../../node_modules/ionic-angular/components/app/app';


@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  dismiss(value) {
    console.log("This is value", value)

    //send data form 1 page to other page 
    this.appCtrl.getRootNavs()[0].setRoot(GroupPage, {
      data: value
    })
    // this.navCtrl.push(GroupPage, {
    //   data: value
    // });
    this.viewCtrl.dismiss();
  }
}
