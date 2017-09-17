import { Component, AfterViewInit } from '@angular/core';

declare var Prism;

@Component({
  templateUrl: './router-interceptor.component.html',
  styleUrls: ['./router-interceptor.component.css']
})
export class RouterInterceptorComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}
