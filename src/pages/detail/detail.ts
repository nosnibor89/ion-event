import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngxs/store';

import { TodoItem } from '../../shared/models/todo-item';
import { ItemtypeType, itemType } from '../../shared/models/item.type';
import { deleteTodo, toggleTodo } from '../../shared/store/todo/todo.actions';
import { deleteNote } from '../../shared/store/note/note.actions';
import { InteractionService } from '../../services/interaction.service';


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item: TodoItem;
  itemType: ItemtypeType;
  subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store,
    private interactionService: InteractionService
  ) {
  }

  ionViewDidLoad() {
    this.subscription = this.store.select(state => state.app).subscribe((state) => {
      this.item = state.selectedItem;
      this.itemType = state.selectedItemType
    });
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  toogleItem() {
    this.store.dispatch(new toggleTodo(this.item));
  }

  deleteItem() {
    let action: Observable<any>;

    // Set action
    if (this.itemType === itemType.todo) {
      action = this.store.dispatch(new deleteTodo(this.item));
    } else {
      action = this.store.dispatch(new deleteNote(this.item));
    }

    // Dispatch
    const subscription = action.subscribe((state) => {
      this.navCtrl.pop();
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);
  }

  tryToDeleteItem() {
    // TODO
    this.interactionService.presentDeleteActionSheet(
      this.itemType,
      () => { this.deleteItem() },
      null,
    );

  }

}
