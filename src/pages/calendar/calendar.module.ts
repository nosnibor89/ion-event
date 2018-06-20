import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { MainNavComponent } from '../../shared/components/main-nav/main-nav';
import { ProfilePage } from '../profile/profile';

@NgModule({
  declarations: [
    CalendarPage,
    MainNavComponent
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
  ],
})
export class CalendarPageModule {}
