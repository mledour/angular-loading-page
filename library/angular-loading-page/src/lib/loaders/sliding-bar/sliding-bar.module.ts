import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidingBarComponent } from './sliding-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlidingBarComponent,
  ],
  exports: [
    SlidingBarComponent
  ]
})
export class SlidingBarModule {}
