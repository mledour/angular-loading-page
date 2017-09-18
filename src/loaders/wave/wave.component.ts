import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-wave',
  template: `
    <div class="sk-wave">
      <div class="sk-rect sk-rect1" [style.background-color]="color"></div>
      <div class="sk-rect sk-rect2" [style.background-color]="color"></div>
      <div class="sk-rect sk-rect3" [style.background-color]="color"></div>
      <div class="sk-rect sk-rect4" [style.background-color]="color"></div>
      <div class="sk-rect sk-rect5" [style.background-color]="color"></div>
    </div>`,
  styleUrls: ['./wave.component.css']
})
export class WaveComponent {
  @Input() color = '#da4733';
}
