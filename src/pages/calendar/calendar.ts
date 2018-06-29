import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Store } from '@ngxs/store';

import { MainPage } from '../../shared/main-page';


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage extends MainPage {

  constructor(public navCtrl: NavController, public store: Store) {
    super(navCtrl, store);
  }
}
