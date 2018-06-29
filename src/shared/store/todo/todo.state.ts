
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { AddTodo, fetchTodos } from "./todo.actions";
import { TodoItem } from "../../models/todo-item";

export interface TodoStateModel {
    todos: TodoItem[],
}


@State<TodoStateModel>({
    name: 'todo',
    defaults: {
        todos: [],
    }
})
export class TodoState {
    constructor(private apiService: ApiService) { }

    @Action(AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();

        console.log(state);

        // ctx.patchState({
        //     todos: state.todos.concat(action.todo),
        // });
    }

    @Action(fetchTodos)
    fetchTodos(ctx: StateContext<TodoStateModel>, action: fetchTodos) {

        this.apiService.fetchTodos().subscribe((todos: TodoItem[]) => {
            ctx.patchState({
                todos: [...todos],
            });
        });

    }
}
