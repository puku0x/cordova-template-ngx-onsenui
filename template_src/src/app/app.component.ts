import { Component } from '@angular/core';

import { Page1Component } from './page1/page1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  root = Page1Component;
}
