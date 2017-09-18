import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-chasing-dots',
  template: `
    <div class="sk-chasing-dots">
      <div class="sk-child sk-dot1" [style.background-color]="colorOne"></div>
      <div class="sk-child sk-dot2" [style.background-color]="colorTwo"></div>
    </div>`,
  styleUrls: ['./chasing-dots.component.css']
})
export class ChasingDotsComponent {
  @Input() colorOne = '#da4733';
  @Input() colorTwo = '#3b78e7';
}
