import { Injectable } from "@angular/core";
import { ActionSheetController, AlertController } from "ionic-angular";
import { ItemtypeType } from "../shared/models/item.type";


type DeleteActionSheetHandler = () => void | boolean;

@Injectable()
export class InteractionService {

    constructor(private actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController) { }


    /**
     * 
     * @param itemType ItemtypeType Item to be deleted
     * @param deleteHandler Callback function to be executed when deleted
     * @param cancelHandler Callback function to be executed when canceled
     */
    presentDeleteActionSheet(itemType: ItemtypeType, deleteHandler: DeleteActionSheetHandler, cancelHandler: DeleteActionSheetHandler) {

        const actionSheet = this.actionSheetCtrl.create({
            title: `Delete this ${itemType} ?`,
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: () => {
                        if(deleteHandler){
                            deleteHandler();
                        }
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        if(cancelHandler){
                            cancelHandler();
                        }
                    }
                }
            ]
        });

        actionSheet.present();
    }

}

