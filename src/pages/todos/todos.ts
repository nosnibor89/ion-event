import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';
import { TodoState } from '../../shared/store/todo/todo.state';


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
export class TodosPage implements MainPage {
  @Select(TodoState) todos$: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

  goProfile(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }

  trackByItemId(index, item) {
    return item ? item.id : undefined;
  }

}
