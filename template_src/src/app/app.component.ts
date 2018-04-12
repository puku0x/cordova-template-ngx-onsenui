import { Component } from '@angular/core';

import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tab1 = Tab1Component;
  tab2 = Tab2Component;
  tab3 = Tab3Component;
}
