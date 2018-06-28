import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoItem } from '../../shared/models/todo-item';
import { ItemtypeType, itemType } from '../../shared/models/item.type';
import { Store } from '@ngxs/store';
import { removeTodo } from '../../shared/store/todo/todo.actions';
import { removeNote } from '../../shared/store/note/note.actions';
import { InteractionService } from '../../services/interaction.service';
import { Observable } from 'rxjs';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store,
    private interactionService: InteractionService
  ) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    this.itemType = this.navParams.get('itemType');
  }

  toogleItem() {
    console.log('toogle');

    // TODO
  }

  removeItem() {
    let action: Observable<any>;

    // Set action
    if (this.itemType === itemType.todo) {
      action = this.store.dispatch(new removeTodo(this.item));
    } else {
      action = this.store.dispatch(new removeNote(this.item));
    }

    // Dispatch
    const subscription= action.subscribe((state) => {
      this.navCtrl.pop();
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 1000);
  }

  tryToRemoveItem() {
    // TODO
    this.interactionService.presentActionSheet(
      this.itemType, 
      () => { this.removeItem() }, 
      () => { console.log("here in cncel")}
    );



    // this.removeItem();


  }

}
