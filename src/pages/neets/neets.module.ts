import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeetsPage } from './neets';

@NgModule({
  declarations: [
    NeetsPage,
  ],
  imports: [
    IonicPageModule.forChild(NeetsPage),
  ],
})
export class NeetsPageModule {}
