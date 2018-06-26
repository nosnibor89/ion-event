import { TodoItem } from "../../models/todo-item";


export const ADD_TODO = '[Todo] Add Todo';
export const FETCH_TODOS = '[Todo] Fetch Todos';

export class AddTodo {
    static readonly type = ADD_TODO;
    constructor(public todo: TodoItem) { }
}


export class fetchTodos {
    static readonly type = FETCH_TODOS;
}
