import { Component, OnInit } from '@angular/core';

import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  // Tabs
  tabs = [{
    label: 'Tab 1',
    icon: 'ion-home',
    page: Tab1Component,
  }, {
    label: 'Tab 2',
    icon: 'ion-ios-browsers',
    page: Tab2Component,
  }, {
    label: 'Tab 3',
    icon: 'ion-ios-search',
    page: Tab3Component,
  }];

  // Title
  title = this.tabs[0].label;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Callback for postchange
   * @param event
   */
  onPostchange(event) {
    const index = event.activeIndex;
    this.title = this.tabs[index].label;
  }

}
