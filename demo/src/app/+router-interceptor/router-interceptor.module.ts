import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterInterceptorRoutingModule } from './router-interceptor-routing.module';
import { RouterInterceptorComponent } from './router-interceptor.component';

import { BoxModule } from '../ng-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    RouterInterceptorRoutingModule,
    BoxModule
  ],
  declarations: [RouterInterceptorComponent]
})
export class RouterInterceptorModule { }
