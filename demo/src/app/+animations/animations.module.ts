import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';

import { BoxModule } from 'angular-admin-lte';

import {
  ChasingDotsModule, CircleModule, CubeGridModule,
  DoubleBounceModule,
  FadingCircleModule, FoldingCubeModule,
  MaterialBarModule,
  PulseModule,
  SlidingBarModule,
  ThreeBounceModule,
  WanderingCubesModule, WaveModule
} from '../../../../src';

@NgModule({
  imports: [
    CommonModule,
    AnimationsRoutingModule,
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
  declarations: [AnimationsComponent]
})
export class AnimationsModule { }
