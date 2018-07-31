import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlumniPage } from './alumni';

@NgModule({
  declarations: [
    AlumniPage,
  ],
  imports: [
    IonicPageModule.forChild(AlumniPage),
  ],
})
export class AlumniPageModule {}
