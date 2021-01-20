import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-fading-circle',
  template: `
    <div class="sk-fading-circle">
      <div class="sk-circle1 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle2 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle3 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle4 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle5 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle6 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle7 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle8 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle9 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle10 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle11 sk-circle"><div [style.background-color]="color"></div></div>
      <div class="sk-circle12 sk-circle"><div [style.background-color]="color"></div></div>
    </div>`,
  styleUrls: ['./fading-circle.component.css']
})
export class FadingCircleComponent {
  @Input() color = '#da4733';
}
