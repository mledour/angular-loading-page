import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { HttpObservableService } from './interceptors/http-observable.service';
import { RouteInterceptorService } from './interceptors/route-interceptor.service';

/*
 * MkLoadingPage Interface
 */
interface MkLoadingPage {
    checkPendingHttp: boolean;
    checkPendingRoute: boolean;
}

/*
 * mkLoadingPage Directive
 */
@Directive({
  selector: '[mkLoadingPage]',
})
export class LoadingPageDirective {
  public isPendingRequests: boolean;
  public isPendingRoute: boolean;

  private hasView = false;

  @Input() mkLoadingPage: MkLoadingPage;

  /**
   * @method constructor
   * @param  {HttpObservableService}   privatehttpObservableService   [description]
   * @param  {RouteInterceptorService} privaterouteInterceptorService [description]
   * @param  {TemplateRef<any>}        privatetemplateRef             [description]
   * @param  {ViewContainerRef}        privateviewContainer           [description]                                              [description]
   */
  constructor(
    private httpObservableService: HttpObservableService,
    private routeInterceptorService: RouteInterceptorService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.init();
  }

  /**
   * [init description]
   * @method init
   * @return {[type]} [description]
   */
  private init() {
    if(!this.mkLoadingPage || this.mkLoadingPage.checkPendingHttp) {
      this.httpObservableService.isPendingRequests.subscribe(value =>{
        setTimeout(() => {
          this.isPendingRequests = value;
          this.isVisible();
        });
      });
    }

    if(!this.mkLoadingPage || this.mkLoadingPage.checkPendingRoute) {
      this.routeInterceptorService.isPendingRoute.subscribe(value =>{
        setTimeout(() => {
          this.isPendingRoute = value;
          this.isVisible();
        });
      });
    }
  }

  /**
   * [isVisible description]
   * @method isVisible
   * @return {[type]}  [description]
   */
  private isVisible() {
    if(this.hasView && !this.isPendingRequests && !this.isPendingRoute) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if (!this.hasView && (this.isPendingRequests || this.isPendingRoute)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
    }
  }
}
