
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { fetchNotes, AddNote, deleteNote } from "./note.actions";
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
    addNote(ctx: StateContext<NoteStateModel>, action: AddNote) {
        const state = ctx.getState();

        const sortedNotes = state.notes.sort((a,b) => {
            if(a.id > b.id) return 1;
            if(a.id < b.id) return -1;
            return 0;
        });

        const lastId = sortedNotes[sortedNotes.length -1].id;

        const newNote: TodoItem = {
            id: lastId + 1,
            title: action.note.title,
            note: action.note.note,
            createdAt: new Date().toString(),
        }

        ctx.patchState({
            notes: state.notes.concat(newNote),
        });
        
    }

    @Action(deleteNote)
    deleteTodo(ctx: StateContext<NoteStateModel>, action: deleteNote) {
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

