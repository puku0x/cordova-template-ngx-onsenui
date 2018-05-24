import { Component, ViewChild, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { MenuService } from '../core/services';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, OnDestroy {
  private readonly onDestroy$ = new EventEmitter();

  side = SideComponent;
  content = ContentComponent;

  @ViewChild('splitter') splitter;

  /**
   * Constructor
   */
  constructor(private menuService: MenuService) { }

  /**
   * Initialize
   */
  ngOnInit() {
    this.menuService.open$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(state => {
        this.splitter.nativeElement.side.open();
      });
  }

  /**
   * Finalize
   */
  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
