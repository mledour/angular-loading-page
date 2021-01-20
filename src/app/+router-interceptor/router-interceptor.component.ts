import { Component, AfterViewInit } from '@angular/core';

declare var Prism: any;

@Component({
  templateUrl: './router-interceptor.component.html',
  styleUrls: ['./router-interceptor.component.css']
})
export class RouterInterceptorComponent implements AfterViewInit {

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit(): void {
    Prism.highlightAll();
  }
}
