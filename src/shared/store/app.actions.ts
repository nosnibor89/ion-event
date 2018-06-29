import { TodoItem } from "../models/todo-item";
import { ItemtypeType } from "../models/item.type";

export const SELECT_ITEM = '[App] Select Item';

export class SelectItem {
    static readonly type = SELECT_ITEM;
    constructor(public selectedItem: TodoItem, public itemType: ItemtypeType) { }
}

