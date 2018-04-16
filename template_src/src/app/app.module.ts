import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';

import { CoreModule } from '@app/core/core.module';
import { AppComponent } from '@app/app.component';
import { Page1Component } from '@app/page1/page1.component';
import { Page2Component } from '@app/page2/page2.component';
import { SideComponent } from '@app/page1/side/side.component';
import { ContentComponent } from '@app/page1/content/content.component';
import { Tab1Component } from '@app/page1/content/tab1/tab1.component';
import { Tab2Component } from '@app/page1/content/tab2/tab2.component';

/**
 * Page components
 */
const pages = [
  Page1Component,
  Page2Component,
  SideComponent,
  ContentComponent,
  Tab1Component,
  Tab2Component,
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  entryComponents: [
    ...pages
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
