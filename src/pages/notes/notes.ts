import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';
import { NoteState } from '../../shared/store/note/note.state';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage implements MainPage {
  @Select(NoteState) notes$: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  goProfile(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE)
  }

  trackByItemId(index, item) {
    return item ? item.id : undefined;
  }


}
