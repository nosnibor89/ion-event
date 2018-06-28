import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Content } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';
import { ProfileState, profileFilters } from '../../shared/store/profile/profile.state';
import { ApplyFilter } from '../../shared/store/profile/profile.actions';



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
export class ProfilePage implements MainPage {

  @ViewChild(Content) content: Content;
  @ViewChild('tabs') tabsElement: ElementRef;
  @Select(ProfileState.items) items$: Observable<any>;

  selectedTab  = profileFilters.note;
  scrollHeight: number;
  profileFilters = profileFilters

  constructor(private navCtrl: NavController, private store: Store) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ProfilePage');

    this.setScrollHeight();
  }

  /**
   * Calculates and sets height dimesion for scroll section
   */
  setScrollHeight() : void {
    const height = this.content.contentHeight;
    this.scrollHeight = height - this.tabsElement.nativeElement.offsetTop;
  }

  goProfile(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }

  toogle(tab: string) : void {
    this.selectedTab = tab;
    this.store.dispatch(new ApplyFilter(tab));
  }

  trackByItemId(index, item) {
    return item ? item.id : undefined;
  }

}
