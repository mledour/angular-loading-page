import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircleComponent } from './circle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CircleComponent,
  ],
  exports: [
    CircleComponent
  ]
})
export class CircleModule {}
