import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoItem } from '../../shared/models/todo-item';
import { ItemType } from '../../shared/models/item.type';

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
  itemType: ItemType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    this.itemType = this.navParams.get('itemType');
    console.log(this.item, this.itemType);
  }

  toogleItem() {
    console.log('toogle');
    
    // TODO
  }

  tryToRemoveItem() {
    // TODO
    console.log('remove');
    
  }

}
