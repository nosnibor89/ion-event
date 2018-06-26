import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';
import { DashboardState } from '../../shared/store/dashboard/dashboard.state';



/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage implements MainPage {

  // Doughnut
  public doughnutChartLabels: string[] = ['Month', 'Week', 'Today'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  @Select(DashboardState.summary) summary$: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  goSettings(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }



}
