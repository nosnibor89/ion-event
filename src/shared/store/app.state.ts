
import { State, Action, StateContext } from "@ngxs/store";
import { TodoItem } from "../models/todo-item";
import { ItemtypeType } from "../models/item.type";
import { SelectItem } from "./app.actions";

export interface AppStateModel {
    selectedItem?: TodoItem,
    selectedItemType?: ItemtypeType,
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        selectedItem: null,
        selectedItemType: null,
    }
})
export class AppState {

    @Action(SelectItem)
    selectItem(ctx: StateContext<AppStateModel>, action: SelectItem) {
        ctx.patchState({
            selectedItem: action.selectedItem,
            selectedItemType: action.itemType,
        });
    }

}

