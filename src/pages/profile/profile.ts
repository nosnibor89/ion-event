import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';


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

  selectedTab  = 'notes';
  scrollHeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  goSettings(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }

  toogle(tab: string) : void {
    this.selectedTab = tab;
  }

}
