import { Component, Input } from '@angular/core';

@Component({
  selector: 'mk-cube-grid',
  template: `
    <div class="sk-cube-grid">
      <div class="sk-cube sk-cube1" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube2" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube3" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube4" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube5" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube6" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube7" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube8" [style.background-color]="color"></div>
      <div class="sk-cube sk-cube9" [style.background-color]="color"></div>
    </div>`,
  styleUrls: ['./cube-grid.component.css']
})
export class CubeGridComponent {
  @Input() color = '#da4733';
}
