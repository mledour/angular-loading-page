import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialbarComponent } from './material-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaterialbarComponent,
  ],
  exports: [
    MaterialbarComponent
  ]
})
export class MaterialBarModule {}
