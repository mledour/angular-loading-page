import { Component } from '@angular/core';

@Component({
  selector: 'mk-double-bounce',
  template: `
    <div class="sk-double-bounce">
      <div class="sk-child sk-double-bounce1"></div>
      <div class="sk-child sk-double-bounce2"></div>
    </div>`,
  styleUrls: ['./double-bounce.component.css']
})
export class DoubleBounceComponent {}
