
import { State, Selector } from '@ngxs/store';


import { Summary } from '../../models/summary';
import { TodoState, TodoStateModel } from '../todo/todo.state';
import { NoteState, NoteStateModel } from '../note/note.state';



interface DashboardStateModel {
    summary: Summary,
}

@State<DashboardStateModel>({
    name: 'dashboard',
    defaults: {
        summary: { totalNotes: 0, totalTodos: 0, completedTodos: 0 },
    }
})
export class DashboardState {

    @Selector([TodoState, NoteState]) static summary(state: any, todoState: TodoStateModel, noteState: NoteStateModel): Summary {

        const completedTodos = todoState.todos.reduce((sum, todo) => todo.done ? sum + 1 : sum + 0, 0);
        
        return {
            totalNotes: noteState.notes.length,
            totalTodos: todoState.todos.length,
            completedTodos,
        }
    }
}
