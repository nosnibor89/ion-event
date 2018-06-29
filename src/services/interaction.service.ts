import { Injectable } from "@angular/core";
import { ActionSheetController, ModalController } from "ionic-angular";
import { ItemtypeType } from "../shared/models/item.type";


type DeleteActionSheetHandler = () => void | boolean;
type DismissModalHandler = (type: any, role: string ) => void

@Injectable()
export class InteractionService {

    constructor(private actionSheetCtrl: ActionSheetController, private modalCtrl: ModalController) { }


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

    /**
     * 
     * @param pageName string Name of the page to be lazy loaded
     * @param data object Any data to be passed 
     * @param dismissHandler Function Callback function to be executed onDidDismiss 
     */
    presentModal(pageName: string, data: any, dismissHandler: DismissModalHandler ){
        const options = {
            showBackdrop: true,
            enableBackdropDismiss: true,
        }
        

        let modal = this.modalCtrl.create(pageName, data, options);
        modal.onDidDismiss(dismissHandler);
        modal.present();
    }

}

