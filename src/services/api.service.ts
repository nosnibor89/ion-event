import { Observable } from "rxjs";

import { Mocker } from "../shared/mock/data";
import { TodoItem } from "../shared/models/todo-item";

export class ApiService{

    fetchTodos(): Observable<TodoItem[]>{
        return Mocker.mockTodos();
    }

    fetchNotes(): Observable<TodoItem[]>{
        return Mocker.mockNotes();
    }
}
