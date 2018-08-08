import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DnbPage } from './dnb';

@NgModule({
  declarations: [
    DnbPage,
  ],
  imports: [
    IonicPageModule.forChild(DnbPage),
  ],
})
export class DnbPageModule {}
