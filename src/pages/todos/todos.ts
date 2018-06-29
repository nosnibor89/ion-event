import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { TodoState } from '../../shared/store/todo/todo.state';
import { MainPage } from '../../shared/main-page';
import { InteractionService } from '../../services/interaction.service';
import Pages from '../pages';


/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage extends MainPage {
  @Select(TodoState) todos$: Observable<any>;

  constructor(public navCtrl: NavController, public store: Store, private interactionService: InteractionService) {
    super(navCtrl, store);
  }

  addTodo() {
    this.interactionService.presentModal(Pages.ADD_ITEM_PAGE, { itemType: 'todo' }, null);
  }

}
