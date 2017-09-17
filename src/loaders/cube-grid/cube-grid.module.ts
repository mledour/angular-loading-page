import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CubeGridComponent } from './cube-grid.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CubeGridComponent,
  ],
  exports: [
    CubeGridComponent
  ]
})
export class CubeGridModule {}
