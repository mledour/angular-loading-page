import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PulseComponent } from './pulse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PulseComponent,
  ],
  exports: [
    PulseComponent
  ]
})
export class PulseModule {}
