import { Action } from "@ngrx/store";
import { Todo } from "../app.component";

export enum TodoActionTypes  {

    // สร้าง Action อ่านข้อมูล Todo
    GET_TODO = '[GET TODO]',
    GET_TODO_SUCCESS = '[GET_TODO] SUCCESS',
    GET_TODO_FAILURE = '[GET_TODO] FAILURE',

    // สร้าง Action เพิ่มข้อมูล Todo
    ADD_TODO = '[ADD TODO]',
    ADD_TODO_SUCCESS = '[ADD_TODO] SUCCESS',
    ADD_TODO_FAILURE = '[ADD_TODO] FAILURE',

    // สร้าง Action อัพเดทข้อมูล Todo
    UPDATE_TODO = '[UPDATE TODO]',
    UPDATE_TODO_SUCCESS = '[UPDATE_TODO] SUCCESS',
    UPDATE_TODO_FAILURE = '[UPDATE_TODO] FAILURE',

    // สร้าง Action ลบข้อมูล Todo
    DELETE_TODO = '[DELETE TODO]',
    DELETE_TODO_SUCCESS = '[DELETE_TODO] SUCCESS',
    DELETE_TODO_FAILURE = '[DELETE_TODO] FAILURE',

}

// Create class for Action
// สร้าง class สำหรับ Action อ่านข้อมูล Todo
export class GetTodos implements Action {
    readonly type = TodoActionTypes.GET_TODO;
}

// success
export class GetTodosSuccess implements Action {
    readonly type = TodoActionTypes.GET_TODO_SUCCESS;
    constructor(
        public payload: {
            todos: Todo[];
        }
    ) {}
}

// failure
export class GetTodosFailure implements Action {
    readonly type = TodoActionTypes.GET_TODO_FAILURE;
}

// สร้าง class สำหรับ Action เพิ่มข้อมูล Todo
export class AddTodo implements Action {
    readonly type = TodoActionTypes.ADD_TODO;
    constructor(public payload: string) {}
}

// success
export class AddTodoSuccess implements Action {
    readonly type = TodoActionTypes.ADD_TODO_SUCCESS;
}

// failure
export class AddTodoFailure implements Action {
    readonly type = TodoActionTypes.ADD_TODO_FAILURE;
}

export type TodoActions = GetTodos | GetTodosSuccess | GetTodosFailure | AddTodo | AddTodoSuccess | AddTodoFailure;