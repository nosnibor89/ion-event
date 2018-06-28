
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { addTodo, fetchTodos, removeTodo } from "./todo.actions";
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

    @Action(addTodo)
    addTodo(ctx: StateContext<TodoStateModel>, action: addTodo) {
        const state = ctx.getState();

        console.log(state);

        // ctx.patchState({
        //     todos: state.todos.concat(action.todo),
        // });
    }

    @Action(removeTodo)
    removeTodo(ctx: StateContext<TodoStateModel>, action: removeTodo) {
        const state = ctx.getState();
        const newTodos = state.todos.filter( (item, index) => item.id !== action.todo.id);

        ctx.patchState({
            todos: newTodos,
        });
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
