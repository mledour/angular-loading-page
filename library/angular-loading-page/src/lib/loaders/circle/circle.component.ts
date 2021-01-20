import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-circle',
  template: `
    <div class="sk-circle">
      <div class="sk-circle1 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle2 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle3 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle4 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle5 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle6 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle7 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle8 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle9 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle10 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle11 sk-child"><div [style.background-color]="color"></div></div>
      <div class="sk-circle12 sk-child"><div [style.background-color]="color"></div></div>
    </div>`,
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  @Input() color = '#da4733';
}
