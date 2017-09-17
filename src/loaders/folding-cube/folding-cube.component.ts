import { Component } from '@angular/core';

@Component({
  selector: 'mk-folding-cube',
  template: `
    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>`,
  styleUrls: ['./folding-cube.component.css']
})
export class FoldingCubeComponent {}
