import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OspPage } from './osp';

@NgModule({
  declarations: [
    OspPage,
  ],
  imports: [
    IonicPageModule.forChild(OspPage),
  ],
})
export class OspPageModule {}
