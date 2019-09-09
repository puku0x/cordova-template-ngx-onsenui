import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services';

@Component({
  selector: 'ons-page[side]',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
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
