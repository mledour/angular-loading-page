import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WanderingCubesComponent } from './wandering-cubes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WanderingCubesComponent,
  ],
  exports: [
    WanderingCubesComponent
  ]
})
export class WanderingCubesModule {}
