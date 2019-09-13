import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/contact">Contact</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </div>
  </nav>
  `,
  styles: [`
    .brand-logo {
      padding-left: 20px;
    }
  `]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
