import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Tab1Component } from './page1/tab1/tab1.component';
import { Tab2Component } from './page1/tab2/tab2.component';
import { Tab3Component } from './page1/tab3/tab3.component';

/**
 * Page components
 */
const pages = [
  Page1Component,
  Page2Component,
  Tab1Component,
  Tab2Component,
  Tab3Component,
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages,
    Page2Component
  ],
  entryComponents: [
    ...pages
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
