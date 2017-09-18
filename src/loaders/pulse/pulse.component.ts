import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-pulse',
  template: `<div class="sk-spinner sk-spinner-pulse" [style.background-color]="color"></div>`,
  styleUrls: ['./pulse.component.css']
})
export class PulseComponent {
  @Input() color = '#da4733';
}
