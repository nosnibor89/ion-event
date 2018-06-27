import { NavController } from "ionic-angular";

import { TodoItem } from "./models/todo-item";
import Pages from "../pages/pages";

/**
 * @author Robinson Marquez
 * Works as a parent class for MainPage by sharing navigation behavior
 */
export class MainPage {

    constructor(public navCtrl: NavController) {
    }

    goSettings(): void {
        this.navCtrl.setRoot(Pages.PROFILE_PAGE);
    }

    goToDetail(item: TodoItem, itemType = 'todo') {
        this.navCtrl.push(Pages.DETAIL_PAGE, {
            item,
            itemType,
        });
    }
}