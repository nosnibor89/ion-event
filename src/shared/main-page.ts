import { NavController } from "ionic-angular";

import { TodoItem } from "./models/todo-item";
import Pages from "../pages/pages";
import { Store } from "@ngxs/store";
import { SelectItem } from "./store/app.actions";
import { ItemtypeType } from "./models/item.type";

/**
 * @author Robinson Marquez
 * Works as a parent class for MainPage by sharing navigation behavior
 */
export class MainPage {

    constructor(public navCtrl: NavController, public store: Store) {
    }

    goProfile(): void {
        this.navCtrl.setRoot(Pages.PROFILE_PAGE);
    }

    goToDetail(item: TodoItem, itemType: ItemtypeType = 'todo') {

        const subscription = this.store.dispatch(new SelectItem(item, itemType))
            .subscribe(() => {
                this.navCtrl.push(Pages.DETAIL_PAGE);
            })


        setTimeout(() => {
            subscription.unsubscribe();
        }, 1000);
    }

    trackByItemId(index, item) {
        console.log(item);
        return item ? item.id : undefined;
    }
}