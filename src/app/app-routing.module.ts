import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    data: {
        title: 'Get Started',
        icon: 'fa fa-home',
        breadcrumb: ' ',
    },
    children: [
      {
        path: '',
        component: HomeComponent
      }, {
        path: 'router-interceptor',
        loadChildren: () => import('./+router-interceptor/router-interceptor.module').then(m => m.RouterInterceptorModule),
        data: {
          title: 'Router Interceptor',
          breadcrumb: 'router interceptor',
          icon: ''
        }
      }, {
        path: 'http-interceptor',
        loadChildren: () => import('./+http-interceptor/http-interceptor.module').then(m => m.HttpInterceptorModule),
        data: {
          title: 'Http Interceptor',
          breadcrumb: 'http interceptor',
          icon: ''
        }
      }, {
        path: 'animations',
        loadChildren: () => import('./+animations/animations.module').then(m => m.AnimationsModule),
        data: {
          title: 'Animations',
          breadcrumb: 'animations',
          icon: ''
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
