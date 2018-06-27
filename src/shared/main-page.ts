import { NavController } from "ionic-angular";

import { TodoItem } from "./models/todo-item";
import Pages from "../pages/pages";

export class MainPage {

    constructor(public navCtrl: NavController) {
    }

    goSettings(): void {
        this.navCtrl.setRoot(Pages.PROFILE_PAGE);
    }

    goToDetail(note: TodoItem) {
        this.navCtrl.push(Pages.DETAIL_PAGE, {
            item: note,
        });
    }
}