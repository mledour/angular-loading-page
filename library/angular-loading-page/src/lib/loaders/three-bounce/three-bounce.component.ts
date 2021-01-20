import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-three-bounce',
  template: `
    <div class="sk-three-bounce">
       <div class="sk-child sk-bounce1" [style.background-color]="colorOne"></div>
       <div class="sk-child sk-bounce2" [style.background-color]="colorTwo"></div>
       <div class="sk-child sk-bounce3" [style.background-color]="colorThree"></div>
     </div>`,
  styleUrls: ['./three-bounce.component.css']
})
export class ThreeBounceComponent {
  @Input() colorOne = '#00a65a';
  @Input() colorTwo = '#fdba2c';
  @Input() colorThree = '#da4733';
}
