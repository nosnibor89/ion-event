import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../../shared/main-page.interface';
import Pages from '../pages';
import { Mocker } from '../../shared/mock/data';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const t = Mocker.mockTodos();

    console.log(t)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

  goSettings(): void {
    this.navCtrl.setRoot(Pages.PROFILE_PAGE);
  }

}
