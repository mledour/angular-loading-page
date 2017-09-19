import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { DemosComponent } from './demos.component';

import { BoxModule } from '../ng-admin-lte';

import {
  ChasingDotsModule, CircleModule, CubeGridModule,
  DoubleBounceModule,
  FadingCircleModule, FoldingCubeModule,
  MaterialBarModule,
  PulseModule,
  SlidingBarModule,
  ThreeBounceModule,
  WanderingCubesModule, WaveModule
} from '../src';

@NgModule({
  imports: [
    CommonModule,
    DemosRoutingModule,
    BoxModule,
    ChasingDotsModule, CircleModule, CubeGridModule,
    DoubleBounceModule,
    FadingCircleModule, FoldingCubeModule,
    MaterialBarModule,
    PulseModule,
    SlidingBarModule,
    ThreeBounceModule,
    WanderingCubesModule, WaveModule
  ],
  declarations: [DemosComponent]
})
export class DemosModule { }
