import { TodoItem } from "../../models/todo-item";


export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';
export const FETCH_TODOS = '[Todo] Fetch Todos';

export class addTodo {
    static readonly type = ADD_TODO;
    constructor(public todo: TodoItem) { }
}

export class removeTodo {
    static readonly type = REMOVE_TODO;
    constructor(public todo: TodoItem) { }
}

export class fetchTodos {
    static readonly type = FETCH_TODOS;
}
