import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MenuService {
  subject = new Subject();

  /**
   * Get menu state
   */
  get open$(): Observable<any> {
    return this.subject.asObservable();
  }

  /**
   * Toggle menu
   */
  open() {
    this.subject.next();
  }
}
