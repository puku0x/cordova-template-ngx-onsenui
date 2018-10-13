import { Component, OnInit } from '@angular/core';

import { MenuService } from '@app/services';

@Component({
  selector: 'ons-page[side]',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  /**
   * Constructor
   */
  constructor(private menuService: MenuService) { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Open menu
   */
  closeMenu() {
    this.menuService.close();
  }

}
