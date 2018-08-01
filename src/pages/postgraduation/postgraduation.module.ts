import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostgraduationPage } from './postgraduation';

@NgModule({
  declarations: [
    PostgraduationPage,
  ],
  imports: [
    IonicPageModule.forChild(PostgraduationPage),
  ],
})
export class PostgraduationPageModule {}
