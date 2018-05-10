import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RouteInterceptorService } from './interceptors/route-interceptor.service';
import { HttpInterceptorService, HttpInterceptorServiceFactory } from './interceptors/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpObservableService } from './interceptors/http-observable.service';

import { LoadingPageDirective } from './loading-page.directive';

const HttpInterceptorServiceExistingProvider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: HttpInterceptorService,
  multi: true
};

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LoadingPageDirective
  ],
  exports: [
    HttpClientModule,
    LoadingPageDirective
  ],
  providers: [
    RouteInterceptorService,
    HttpObservableService,
    HttpInterceptorServiceExistingProvider,
    {
      provide: HttpInterceptorService,
      useFactory: HttpInterceptorServiceFactory,
      deps: [Injector]
    }
  ]
})
export class LoadingPageModule {}
