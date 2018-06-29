
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { ApplyFilter } from './profile.actions';
import { TodoState, TodoStateModel } from '../todo/todo.state';
import { NoteState, NoteStateModel } from '../note/note.state';

export const profileFilters = {
    todo: 'todo',
    note: 'note',
};

interface ProfileStateModel {
    filter: string,
}

@State<ProfileStateModel>({
    name: 'profile',
    defaults: {
        filter: profileFilters.note,
    }
})
export class ProfileState {

    @Selector([TodoState, NoteState]) static items(state: any, todoState: TodoStateModel, noteState: NoteStateModel) {
        return state.filter === profileFilters.todo ?  todoState.todos : noteState.notes;
    }

    @Action(ApplyFilter)
    applyFilter(ctx: StateContext<ProfileStateModel>, action: ApplyFilter) {
        ctx.patchState({
            filter: action.filter,
        });
    }

}
