
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { addTodo, fetchTodos, deleteTodo, toggleTodo } from "./todo.actions";
import { TodoItem } from "../../models/todo-item";
import { AppStateModel } from "../app.state";
import { itemType, ItemtypeType } from "../../models/item.type";
import { SelectItem } from "../app.actions";

export interface TodoStateModel extends AppStateModel {
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

    @Action(deleteTodo)
    deleteTodo(ctx: StateContext<TodoStateModel>, action: deleteTodo) {
        const state = ctx.getState();
        const newTodos = state.todos.filter((item, index) => item.id !== action.todo.id);

        ctx.patchState({
            todos: newTodos,
        });
    }

    @Action(toggleTodo)
    toggleTodo(ctx: StateContext<TodoStateModel>, action: toggleTodo) {
        const state = ctx.getState();

        const updatedTodo: TodoItem = {
            ...action.todo,
            done: !action.todo.done,
        }
        const todoIndex = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        const newTodos = state.todos.slice();

        newTodos[todoIndex] = updatedTodo;

        ctx.patchState({
            todos: newTodos,
            selectedItem: updatedTodo,
            selectedItemType: itemType.todo as ItemtypeType,
        });

        ctx.dispatch(new SelectItem(updatedTodo, itemType.todo as ItemtypeType));
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
