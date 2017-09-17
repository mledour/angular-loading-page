import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpInterceptorRoutingModule } from './http-interceptor-routing.module';
import { HttpInterceptorComponent } from './http-interceptor.component';

import { BoxModule } from '../ng-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    HttpInterceptorRoutingModule,
    BoxModule
  ],
  declarations: [HttpInterceptorComponent]
})
export class HttpInterceptorModule { }
