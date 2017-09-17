import { Component, AfterViewInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

declare var Prism;

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements AfterViewInit {
  public response;

  constructor(
    private http: Http
  ) {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }


  /**
   * [startRequest description]
   * @method startRequest
   */
  public startRequest(): void {
    this.get().subscribe(response => {
      this.response = response;
      Prism.highlightAll();
    });
  }

  /**
   * [get description]
   * @method get
   * @return {Observable<any>} [description]
   */
  public get(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(this.handleResponse);
  }

  /**
   * [handleResponse description]
   * @method handleResponse
   * @param  {Response}     response [description]
   * @return {Response}              [description]
   */
  private handleResponse(response: Response) {
    return response.text();
  }

  /**
   * [handleError description]
   * @method handleError
   * @param  {[type]}    error [description]
   */
  private handleError(error): void {
    console.log('Error', error);
  }
}
