import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AimsPage } from './aims';

@NgModule({
  declarations: [
    AimsPage,
  ],
  imports: [
    IonicPageModule.forChild(AimsPage),
  ],
})
export class AimsPageModule {}
