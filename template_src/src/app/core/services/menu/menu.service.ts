import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

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
