import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from './todo.service';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // สร้าง Object FormGroup
  todoForm: FormGroup = new FormGroup({
    title: new FormControl(''),
  })

  submitted = false;
  msgStatus:string = '';

  constructor(
    private formBuilder: FormBuilder,
    public todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });
  }

  // สร้างฟังก์ชันสำหรับผูกกับฟอร์ม
  get f(): { [key: string]: AbstractControl } {
    return this.todoForm.controls;
  }

  add() {
    this.submitted = true;
    if (this.todoForm.valid) {
      // console.log(this.todoForm.value.title);
      // const title: string = this.todoForm.get('title').value as string;
      this.todoService.addTodo(this.todoForm.value.title);
      this.todoForm.reset();
      this.submitted = false;
    }
  }

  update(todo: Todo) {
    this.todoService.updateTodo(todo.id);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }
  
}
