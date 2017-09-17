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

export * from './loaders/chasing-dots/chasing-dots.module';
export * from './loaders/circle/circle.module';
export * from './loaders/cube-grid/cube-grid.module';
export * from './loaders/double-bounce/double-bounce.module';
export * from './loaders/fading-circle/fading-circle.module';
export * from './loaders/folding-cube/folding-cube.module';
export * from './loaders/material-bar/material-bar.module';
export * from './loaders/pulse/pulse.module';
export * from './loaders/sliding-bar/sliding-bar.module';
export * from './loaders/three-bounce/three-bounce.module';
export * from './loaders/wandering-cubes/wandering-cubes.module';
export * from './loaders/wave/wave.module';
