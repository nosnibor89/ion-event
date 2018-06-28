import { TodoItem } from "../../models/todo-item";


export const ADD_NOTE = '[Note] Add Note';
export const FETCH_NOTES = '[Note] Fetch Notes';

export class AddNote {
    static readonly type = ADD_NOTE;
    constructor(public todo: TodoItem) { }
}


export class fetchNotes {
    static readonly type = FETCH_NOTES;
}
