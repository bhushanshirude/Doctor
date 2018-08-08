import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DnbsPage } from './dnbs';

@NgModule({
  declarations: [
    DnbsPage,
  ],
  imports: [
    IonicPageModule.forChild(DnbsPage),
  ],
})
export class DnbsPageModule {}
