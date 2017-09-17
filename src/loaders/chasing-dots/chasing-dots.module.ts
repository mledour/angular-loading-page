import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChasingDotsComponent } from './chasing-dots.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChasingDotsComponent,
  ],
  exports: [
    ChasingDotsComponent
  ]
})
export class ChasingDotsModule {}
