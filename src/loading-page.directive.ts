import { Directive, Input, TemplateRef, ViewContainerRef, OnChanges, SimpleChange } from '@angular/core';
import { HttpObservableService } from './interceptors/http-observable.service';
import { RouteInterceptorService } from './interceptors/route-interceptor.service';

/*
 * MkLoadingPage Interface
 */
export interface MkLoadingPage {
  checkPendingHttp: boolean;
  checkPendingRoute: boolean;
}

/*
 * mkLoadingPage Directive
 */
@Directive({
  selector: '[mkLoadingPage]',
})
export class LoadingPageDirective implements OnChanges {
  public isPendingRequests: boolean;
  public isPendingRoute: boolean;

  private hasView = false;

  @Input() mkLoadingPage: MkLoadingPage;

  /**
   * @method constructor
   * @param privatehttpObservableService   [description]
   * @param privaterouteInterceptorService [description]
   * @param privatetemplateRef             [description]
   * @param privateviewContainer           [description]                                              [description]
   */
  constructor(
    private httpObservableService: HttpObservableService,
    private routeInterceptorService: RouteInterceptorService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  /**
   * @method ngOnChanges
   * @param changes [description]
   */
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.mkLoadingPage.currentValue) {
      this.mkLoadingPage = changes.mkLoadingPage.currentValue;
    }
    if(changes.mkLoadingPage.firstChange) {
      this.init();
    }
  }

  /**
   * [init description]
   * @method init
   * @return [description]
   */
  private init() {
    if(!this.mkLoadingPage || this.mkLoadingPage.checkPendingHttp) {
      this.httpObservableService.isPendingRequests.subscribe(value =>{
        this.isPendingRequests = value;
        this.isVisible();
      });
    }

    if(!this.mkLoadingPage || this.mkLoadingPage.checkPendingRoute) {
      this.routeInterceptorService.isPendingRoute.subscribe(value =>{
        this.isPendingRoute = value;
        this.isVisible();
      });
    }
  }

  /**
   * [isVisible description]
   * @method isVisible
   * @return [description]
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
