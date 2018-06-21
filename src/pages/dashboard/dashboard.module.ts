import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { SummaryBoxComponent } from './components/summary-box/summary-box';

@NgModule({
  declarations: [
    DashboardPage,
    SummaryBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
