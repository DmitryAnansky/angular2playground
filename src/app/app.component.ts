import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
