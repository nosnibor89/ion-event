import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngxs/store';
import { ItemtypeType } from '../../shared/models/item.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItem } from '../../shared/models/todo-item';
import { AddNote } from '../../shared/store/note/note.actions';
import { AddTodo } from '../../shared/store/todo/todo.actions';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  itemType: ItemtypeType;
  form: FormGroup;

  constructor(public navParams: NavParams, public viewCtrl: ViewController, private fb: FormBuilder, private store: Store) {
    this.form = this.fb.group({
      title: [null],
      note: [null],
    });
  }

  ionViewDidLoad(){
    this.itemType = this.navParams.get('itemType');
  }

  saveItem(){
    const item: TodoItem = {
      id: null,
      title: this.form.value.title,
      note: this.form.value.note,
    }

    const action = this.itemType === 'todo' ? new AddTodo(item) : new AddNote(item);

    const subscription =  this.store.dispatch(action).subscribe(() => {
      this.viewCtrl.dismiss();
    });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 100);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
