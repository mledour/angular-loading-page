import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoadingPageModule, ChasingDotsModule, CircleModule, CubeGridModule, DoubleBounceModule, FadingCircleModule, FoldingCubeModule, MaterialBarModule, PulseModule, SlidingBarModule, ThreeBounceModule, WanderingCubesModule, WaveModule } from './src';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule, BoxModule } from './ng-admin-lte';
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
    CoreModule,
    LoadingPageModule, MaterialBarModule,
    LayoutModule.forRoot(adminLteConf),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
