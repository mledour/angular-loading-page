import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-wandering-cubes',
  template: `
    <div class="sk-wandering-cubes">
      <div class="sk-cube sk-cube1" [style.background-color]="colorOne"></div>
      <div class="sk-cube sk-cube2" [style.background-color]="colorTwo"></div>
    </div>`,
  styleUrls: ['./wandering-cubes.component.css']
})
export class WanderingCubesComponent {
  @Input() colorOne = '#da4733';
  @Input() colorTwo = '#3b78e7';
}
