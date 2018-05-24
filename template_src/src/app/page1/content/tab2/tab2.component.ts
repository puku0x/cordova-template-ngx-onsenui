import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';

import { Page2Component } from '../../../page2/page2.component';

@Component({
  selector: 'ons-page[tab2]',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {

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
  push() {
    this.navi.nativeElement.pushPage(Page2Component);
  }

}
