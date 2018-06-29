
import { State, Action, StateContext } from "@ngxs/store";

import { ApiService } from "../../../services/api.service";
import { AddTodo, fetchTodos, deleteTodo, toggleTodo } from "./todo.actions";
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

    @Action(AddTodo)
    AddTodo(ctx: StateContext<TodoStateModel>, action: AddTodo) {
        const state = ctx.getState();

        const sortedTodos = state.todos.sort((a,b) => {
            if(a.id > b.id) return 1;
            if(a.id < b.id) return -1;
            return 0;
        });

        const lastId = sortedTodos[sortedTodos.length -1].id;

        const newTodo: TodoItem = {
            id: lastId + 1,
            title: action.todo.title,
            note: action.todo.note,
            createdAt: new Date().toString(),
        }

        ctx.patchState({
            todos: state.todos.concat(newTodo),
        });
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
