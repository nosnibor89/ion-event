import { Injectable } from "@angular/core";
import { ActionSheetController, ActionSheetOptions } from "ionic-angular";
import { ItemtypeType } from "../shared/models/item.type";
import { Store } from "@ngxs/store";

@Injectable()
export class InteractionService {

    constructor(private actionSheetCtrl: ActionSheetController, private store: Store) { }


    presentActionSheet(itemType: ItemtypeType, removeHandler: Function, cancelHandler: Function) {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Delete this note',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                        removeHandler();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        cancelHandler();
                    }
                }
            ]
        });

        actionSheet.present();

        actionSheet.onDidDismiss((data) => {console.log(data)})
    }

}

