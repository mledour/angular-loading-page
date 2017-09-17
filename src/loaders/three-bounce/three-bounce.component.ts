import { Component } from '@angular/core';

@Component({
  selector: 'mk-three-bounce',
  template: `
    <div class="sk-three-bounce">
       <div class="sk-child sk-bounce1"></div>
       <div class="sk-child sk-bounce2"></div>
       <div class="sk-child sk-bounce3"></div>
     </div>`,
  styleUrls: ['./three-bounce.component.css']
})
export class ThreeBounceComponent {}
