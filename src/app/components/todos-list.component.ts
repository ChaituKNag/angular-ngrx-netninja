import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todos-list",
  template: `
  <div>
    <ul class="collection">
      <li class="collection-item">Alvin</li>
      <li class="collection-item">Alvin</li>
      <li class="collection-item">Alvin</li>
      <li class="collection-item">Alvin</li>
    </ul>
  </div>
  `,
  styles: []
})
export class TodosListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
