import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { ProfileItemComponent } from './components/profile-item/profile-item';

@NgModule({
  declarations: [
    ProfilePage,
    ProfileItemComponent,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
