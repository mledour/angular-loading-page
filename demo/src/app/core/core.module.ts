import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarLeftInnerComponent } from './sidebar-left-inner/sidebar-left-inner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarLeftInnerComponent],
  exports: [BrowserAnimationsModule, SidebarLeftInnerComponent]
})
export class CoreModule {}
