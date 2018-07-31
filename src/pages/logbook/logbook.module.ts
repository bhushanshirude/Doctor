import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogbookPage } from './logbook';

@NgModule({
  declarations: [
    LogbookPage,
  ],
  imports: [
    IonicPageModule.forChild(LogbookPage),
  ],
})
export class LogbookPageModule {
  
}
