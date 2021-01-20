import { Injectable, Optional } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { Observable ,  Subject } from 'rxjs';

@Injectable()
export class RouteInterceptorService {
  private isPendingRouteSubject = new Subject<boolean>();

  /**
   * @method constructor
   */
  constructor(@Optional() private router: Router) {
    if (this.router) {
      router.events.subscribe((event: RouterEvent) => {
        this.routerInterceptor(event);
      });
    }
  }

  /**
   * [isPendingRoute description]
   * @method isPendingRoute
   * @return [description]
   */
  get isPendingRoute(): Observable<boolean> {
    return this.isPendingRouteSubject.asObservable();
  }

  /**
   * [routerInterceptor description]
   * @method routerInterceptor
   * @param event [description]
   */
  private routerInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.onRouteStart();
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      this.onRouteDone();
    }
  }

  /**
   * [onRequestStart description]
   * @method onRequestStart
   */
  private onRouteStart(): void {
    this.isPendingRouteSubject.next(true);
  }

  /**
   * [onRequestDone description]
   * @method onRequestDone
   */
  private onRouteDone(): void {
    this.isPendingRouteSubject.next(false);
  }
}
