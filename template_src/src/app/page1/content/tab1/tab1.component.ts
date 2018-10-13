import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { Page2Component } from '../../../page2/page2.component';

@Component({
  selector: 'ons-page[tab1]',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  /**
   * Constructor
   */
  constructor(private navi: OnsNavigator) { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Push page
   */
  pushPage() {
    this.navi.nativeElement.pushPage(Page2Component);
  }

}
