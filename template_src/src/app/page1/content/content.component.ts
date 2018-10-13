import { Component, NgZone, OnInit } from '@angular/core';

import { MenuService } from '@app/services';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

@Component({
  selector: 'ons-page[content]',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  // Tabs
  tabs = [{
    label: 'Tab 1',
    icon: 'ion-home',
    page: Tab1Component,
  }, {
    label: 'Tab 2',
    icon: 'ion-gear-a',
    page: Tab2Component,
  }];

  // Title
  title = this.tabs[0].label;

  /**
   * Constructor
   */
  constructor(private zone: NgZone, private menuService: MenuService){ }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Callback for prechange
   */
  onPrechange(event) {
    this.zone.run(() => {
      const index = event.activeIndex;
      this.title = this.tabs[index].label;
    });
  }

  /**
   * Open menu
   */
  openMenu() {
    this.menuService.open();
  }

}
