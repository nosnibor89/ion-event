
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { fetchNotes, AddNote } from "./note.actions";
import { TodoItem } from "../../models/todo-item";

export interface NoteStateModel {
    notes: TodoItem[],
}


@State<NoteStateModel>({
    name: 'note',
    defaults: {
        notes: [],
    }
})
export class NoteState {
    constructor(private apiService: ApiService ) { }


    @Action(AddNote)
    addTodo(ctx: StateContext<NoteStateModel>, action: AddNote) {
        const state = ctx.getState();

        // ctx.patchState({
        //     todos: state.todos.concat(action.todo),
        // });
    }

    @Action(fetchNotes)
    async fetchTodos(ctx: StateContext<NoteStateModel>, action: fetchNotes) {

        const todos = await this.apiService.fetchNotes()
        .subscribe((notes: TodoItem[]) => {
            ctx.patchState({
                notes: [...notes],
            });
        });
    }
}

