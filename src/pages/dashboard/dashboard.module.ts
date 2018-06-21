import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { SummaryBoxComponent } from './components/summary-box/summary-box';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardPage,
    SummaryBoxComponent,
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    ChartsModule,
  ],
})
export class DashboardPageModule {}
