import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  subject = new Subject<boolean>();

  /**
   * Get menu state
   */
  get menu$(): Observable<boolean> {
    return this.subject.asObservable();
  }

  /**
   * Open menu
   */
  open() {
    this.subject.next(true);
  }

  /**
   * Close menu
   */
  close() {
    this.subject.next(false);
  }
}
