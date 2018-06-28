import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/umd';
import Pages from '../pages';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root =  Pages.TODOS_PAGE;
  tab2Root =  Pages.NOTES_PAGE;
  tab3Root =  Pages.DASHBOARD_PAGE;
  tab4Root =  Pages.CALENDAR_PAGE;
  tab5Root =  Pages.PROFILE_PAGE;
}
