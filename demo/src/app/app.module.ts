import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingPageModule, MaterialBarModule } from '../../../src';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule, BoxModule } from 'angular-admin-lte';
import { adminLteConf } from './admin-lte.conf';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BoxModule,
    LoadingPageModule, MaterialBarModule,
    LayoutModule.forRoot(adminLteConf),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
