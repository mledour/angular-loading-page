import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, ConnectionBackend, XHRBackend, RequestOptions } from '@angular/http';

import { RouteInterceptorService } from './interceptors/route-interceptor.service';
import { httpInterceptorServiceFactory } from './interceptors/http-interceptor.service';
import { HttpObservableService } from './interceptors/http-observable.service';

import { LoadingPageDirective } from './loading-page.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    LoadingPageDirective
  ],
  exports: [
    HttpModule,
    LoadingPageDirective
  ],
  providers: [
    RouteInterceptorService,
    HttpObservableService,
    { provide: Http,
      useFactory: httpInterceptorServiceFactory,
      deps: [XHRBackend, RequestOptions, Injector] }
  ]
})
export class LoadingPageModule {}
