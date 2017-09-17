import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterInterceptorComponent } from './router-interceptor.component';

const routes: Routes = [{
  path: '',
  component: RouterInterceptorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterInterceptorRoutingModule { }
