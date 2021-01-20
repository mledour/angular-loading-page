import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleBounceComponent } from './double-bounce.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DoubleBounceComponent,
  ],
  exports: [
    DoubleBounceComponent
  ]
})
export class DoubleBounceModule {}
