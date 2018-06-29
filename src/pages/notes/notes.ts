import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { NoteState } from '../../shared/store/note/note.state';
import { MainPage } from '../../shared/main-page';
import { InteractionService } from '../../services/interaction.service';
import Pages from '../pages';

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
export class NotesPage extends MainPage {
  @Select(NoteState) notes$: Observable<any>;

  constructor(public navCtrl: NavController, public store: Store, private interactionService: InteractionService) {
    super(navCtrl, store);
  }

  addTodo() {
    this.interactionService.presentModal(Pages.ADD_ITEM_PAGE, { itemType: 'note' }, null);
  }
}
