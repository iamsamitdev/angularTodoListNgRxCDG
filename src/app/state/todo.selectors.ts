import { createFeatureSelector, createSelector } from "@ngrx/store"

// Import Reducer
import { todoAdapter, TodoState } from './todo.reducers';

// สร้าง Feature Selector
const todoFeatureSelector = createFeatureSelector<TodoState>('todos');

// สร้าง Selector สำหรับอ่านข้อมูล todos
export const getTodos = createSelector(
    todoFeatureSelector,
    todoAdapter.getSelectors().selectAll
);

// สร้าง Selector สำหรับอ่านข้อมูล loading
export const getLoading = createSelector(
    todoFeatureSelector,
    (state: TodoState) => state.loading
);

// สร้าง Selector สำหรับอ่านข้อมูล error
export const getError = createSelector(
    todoFeatureSelector,
    (state: TodoState) => state.error
);