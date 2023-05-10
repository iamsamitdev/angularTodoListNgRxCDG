import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Todo } from "../app.component";
import { TodoActions, TodoActionTypes } from "./todo.actions";

// สร้าง interface สำหรับ state ของ Todo
export interface TodoState extends EntityState<Todo> {
    loading: boolean;
    error: string;
}

// todo default state
export const todoDefaultState: TodoState = {
    ids: [],
    entities: {},
    loading: false,
    error: ''
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState(
    todoDefaultState
);

// สร้าง reducer สำหรับ Todo
export function TodoReducer(
    state: TodoState = initialState,
    action: TodoActions
): TodoState {
    switch (action.type) {
        case TodoActionTypes.GET_TODO: {
            return { ...state, loading: true }
        }
        case TodoActionTypes.GET_TODO_SUCCESS: {
            return todoAdapter.setAll(action.payload.todos, {
                ...state,
                loading: false,
            });
        }
        case TodoActionTypes.GET_TODO_FAILURE: {
            return { 
                ...state, 
                loading: false, 
                error: 'Get todo failure'
            };
        }
        default: {
            return state;
        }
    }
}
