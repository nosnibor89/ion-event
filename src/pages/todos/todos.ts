import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { TodoState } from '../../shared/store/todo/todo.state';
import { MainPage } from '../../shared/main-page';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super(navCtrl);
  }

}
