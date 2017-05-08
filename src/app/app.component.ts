import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header-component></header-component>
    <ul>
      <li><a routerLink="/">home</a></li>
      <li><a routerLink="/about">about</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
