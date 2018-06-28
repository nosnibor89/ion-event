import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NgxsModule } from '@ngxs/store';

import { ProfilePage } from './profile';
import { ComponentsModule } from '../../shared/components/components.module';
import { ProfileState } from '../../shared/store/profile/profile.state';


@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule,
    NgxsModule.forFeature([
      ProfileState,
    ]),
  ],
})
export class ProfilePageModule {}
