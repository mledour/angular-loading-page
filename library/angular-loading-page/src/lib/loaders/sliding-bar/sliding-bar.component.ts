import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-sliding-bar',
  template: `<div class="sliding-bar" [style.background-color]="colorOne"><div [style.background-color]="colorTwo"></div></div>`,
  styleUrls: ['./sliding-bar.component.css']
})
export class SlidingBarComponent {
  @Input() colorOne = '#ddd';
  @Input() colorTwo = '#3c8dbc';
}
