import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeetPage } from './neet';

@NgModule({
  declarations: [
    NeetPage,
  ],
  imports: [
    IonicPageModule.forChild(NeetPage),
  ],
})
export class NeetPageModule {}
