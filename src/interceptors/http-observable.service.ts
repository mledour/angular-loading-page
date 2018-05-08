import { Injectable } from '@angular/core';

import { Observable ,  Subject } from 'rxjs';



@Injectable()
export class HttpObservableService {
  private _pendingRequestsCounter = 0;
  private _isPendingRequestsSubject = new Subject<boolean>();

  /**
   * [isPendingRequests description]
   * @method isPendingRequests
   * @return {Observable<boolean>} [description]
   */
  get isPendingRequests(): Observable<boolean> {
    return this._isPendingRequestsSubject.asObservable();
  }

  /**
   * [pendingRequests description]
   * @method pendingRequests
   * @return {number}        [description]
   */
  get pendingRequests(): number {
    return this._pendingRequestsCounter;
  }
  
  /**
   * [onRequestStart description]
   * @method onRequestStart
   */
  public onRequestStart(): void {
    this._pendingRequestsCounter ++;

    if(this._pendingRequestsCounter === 1) {
      this._isPendingRequestsSubject.next(true);
    }
  }

  /**
   * [onRequestDone description]
   * @method onRequestDone
   */
  public onRequestDone(): void {
    this._pendingRequestsCounter --;

    if(this._pendingRequestsCounter === 0) {
      this._isPendingRequestsSubject.next(false);
    }
  }
}
