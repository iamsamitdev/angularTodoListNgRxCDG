import { Injectable } from '@angular/core';

// Import NgRx Actions, Effects, ofType, createEffect
import { Actions, createEffect, ofType  } from '@ngrx/effects';

// Import todoActions
import { GetTodos, GetTodosSuccess, GetTodosFailure, TodoActionTypes } from './todo.actions';

// Import todoService
import { TodoService } from '../todo.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class TodoEffects {

    constructor(
        private todoService: TodoService,  
        private actions: Actions
    ) {}

    // สร้าง Effect สำหรับ Action GET_TODO
    public getTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<GetTodos>(TodoActionTypes.GET_TODO),
            mergeMap(() => {
                return this.todoService.getTodos().pipe(
                    map((todos) => new GetTodosSuccess({ todos })),
                    catchError(() => of(new GetTodosFailure()))
                );
            })
        );
    });
}