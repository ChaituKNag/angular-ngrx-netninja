import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="row">
      <app-add-todo class="col s8 offset-s2"></app-add-todo>
      <app-todos-list class="col s8 offset-s2"></app-todos-list>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
