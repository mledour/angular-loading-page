import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaveComponent } from './wave.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WaveComponent,
  ],
  exports: [
    WaveComponent
  ]
})
export class WaveModule {}
