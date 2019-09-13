import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
  <form class="add-todo-form" (submit)="onSubmit()">
    <div class="row">
      <div class="input-field">
        <input id="first_name" type="text" class="validate" [(ngModel)]="todoModel.todo">
        <label for="first_name">Add a todo</label>
      </div>
    </div>
  </form>
  `,
  styles: [`
    .add-todo-form {
      padding-top: 20px;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  constructor() {
  }

  todoModel: any = {
    todo: ''
  };

  ngOnInit() {
  }

}
