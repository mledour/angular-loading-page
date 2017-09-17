import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoldingCubeComponent } from './folding-cube.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FoldingCubeComponent,
  ],
  exports: [
    FoldingCubeComponent
  ]
})
export class FoldingCubeModule {}
