import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-double-bounce',
  template: `
    <div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce1" [style.background-color]="colorOne"></div>
      <div class="sk-child sk-double-bounce2" [style.background-color]="colorTwo"></div>
    </div>`,
  styleUrls: ['./double-bounce.component.css']
})
export class DoubleBounceComponent {
  @Input() colorOne = '#da4733';
  @Input() colorTwo = '#3b78e7';
}
