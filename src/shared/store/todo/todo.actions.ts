import { TodoItem } from "../../models/todo-item";


export const ADD_TODO = '[Todo] Add Todo';
export const TOGGLE_TODO = '[Todo] Toggle Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';
export const FETCH_TODOS = '[Todo] Fetch Todos';

export class addTodo {
    static readonly type = ADD_TODO;
    constructor(public todo: TodoItem) { }
}

export class deleteTodo {
    static readonly type = REMOVE_TODO;
    constructor(public todo: TodoItem) { }
}

export class toggleTodo {
    static readonly type = TOGGLE_TODO;
    constructor(public todo: TodoItem) { }
}

export class fetchTodos {
    static readonly type = FETCH_TODOS;
}
