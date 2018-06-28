
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { fetchNotes, AddNote, removeNote } from "./note.actions";
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
    constructor(private apiService: ApiService) { }


    @Action(AddNote)
    addTodo(ctx: StateContext<NoteStateModel>, action: AddNote) {
        const state = ctx.getState();

        // ctx.patchState({
        //     todos: state.todos.concat(action.todo),
        // });
    }

    @Action(removeNote)
    removeTodo(ctx: StateContext<NoteStateModel>, action: removeNote) {
        const state = ctx.getState();
        const newNotes = state.notes.filter( (item, index) => item.id !== action.note.id);

        ctx.patchState({
            notes: newNotes,
        });
    }


    @Action(fetchNotes)
    fetchTodos(ctx: StateContext<NoteStateModel>, action: fetchNotes) {

        this.apiService.fetchNotes()
            .subscribe((notes: TodoItem[]) => {
                ctx.patchState({
                    notes: [...notes],
                });
            });
    }
}

