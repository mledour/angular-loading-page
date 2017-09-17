import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FadingCircleComponent } from './fading-circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FadingCircleComponent,
  ],
  exports: [
    FadingCircleComponent
  ]
})
export class FadingCircleModule {}
