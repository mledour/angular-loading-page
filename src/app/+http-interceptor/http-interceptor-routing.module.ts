import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpInterceptorComponent } from './http-interceptor.component';

const routes: Routes = [{
  path: '',
  component: HttpInterceptorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpInterceptorRoutingModule { }
