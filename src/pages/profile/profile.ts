import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { ProfileState, profileFilters } from '../../shared/store/profile/profile.state';
import { ApplyFilter } from '../../shared/store/profile/profile.actions';
import { MainPage } from '../../shared/main-page';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage extends MainPage {

  @ViewChild(Content) content: Content;
  @ViewChild('tabs') tabsElement: ElementRef;
  @Select(ProfileState.items) items$: Observable<any>;

  selectedTab  = profileFilters.note;
  scrollHeight: number;
  profileFilters = profileFilters

  constructor(public navCtrl: NavController, private store: Store) {
    super(navCtrl);
  }

  ionViewDidEnter() {
    this.setScrollHeight();
  }

  /**
   * Calculates and sets height dimesion for scroll section
   */
  setScrollHeight() : void {
    const height = this.content.contentHeight;
    this.scrollHeight = height - this.tabsElement.nativeElement.offsetTop;
  }

  /**
   * Toogle the selected tabs and dispatch ApplyFilter so the item 
   * can be updated in the state
   * @param tab string tab/filter name
   */
  toogle(tab: string) : void {
    this.selectedTab = tab;
    this.store.dispatch(new ApplyFilter(tab));
  }

}
