import { Injectable } from '@angular/core';

import { Observable ,  Subject } from 'rxjs';



@Injectable()
export class HttpObservableService {
  private pendingRequestsCounter = 0;
  private isPendingRequestsSubject = new Subject<boolean>();

  /**
   * [isPendingRequests description]
   * @method isPendingRequests
   * @return [description]
   */
  get isPendingRequests(): Observable<boolean> {
    return this.isPendingRequestsSubject.asObservable();
  }

  /**
   * [pendingRequests description]
   * @method pendingRequests
   * @return [description]
   */
  get pendingRequests(): number {
    return this.pendingRequestsCounter;
  }

  /**
   * [onRequestStart description]
   * @method onRequestStart
   */
  public onRequestStart(): void {
    this.pendingRequestsCounter ++;

    if (this.pendingRequestsCounter === 1) {
      this.isPendingRequestsSubject.next(true);
    }
  }

  /**
   * [onRequestDone description]
   * @method onRequestDone
   */
  public onRequestDone(): void {
    this.pendingRequestsCounter --;

    if (this.pendingRequestsCounter === 0) {
      this.isPendingRequestsSubject.next(false);
    }
  }
}
