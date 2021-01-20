import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeBounceComponent } from './three-bounce.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThreeBounceComponent,
  ],
  exports: [
    ThreeBounceComponent
  ]
})
export class ThreeBounceModule {}
