import { Component } from '@angular/core';

@Component({
  selector: 'mk-chasing-dots',
  template: `
    <div class="sk-chasing-dots">
      <div class="sk-child sk-dot1"></div>
      <div class="sk-child sk-dot2"></div>
    </div>`,
  styleUrls: ['./chasing-dots.component.css']
})
export class ChasingDotsComponent {}
