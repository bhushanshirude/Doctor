import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FellowshipPage } from './fellowship';

@NgModule({
  declarations: [
    FellowshipPage,
  ],
  imports: [
    IonicPageModule.forChild(FellowshipPage),
  ],
})
export class FellowshipPageModule {}
