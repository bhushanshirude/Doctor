import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpscPage } from './upsc';

@NgModule({
  declarations: [
    UpscPage,
  ],
  imports: [
    IonicPageModule.forChild(UpscPage),
  ],
})
export class UpscPageModule {}
