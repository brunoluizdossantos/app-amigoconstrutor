import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstitucionalPage } from './institucional';

@NgModule({
  declarations: [
    InstitucionalPage,
  ],
  imports: [
    IonicPageModule.forChild(InstitucionalPage),
  ],
})
export class InstitucionalPageModule {}
