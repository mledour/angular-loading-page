import { Component, AfterViewInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';



declare var Prism: any;

@Component({
  selector: 'app-http-interceptor',
  templateUrl: './http-interceptor.component.html',
  styleUrls: ['./http-interceptor.component.css']
})
export class HttpInterceptorComponent implements AfterViewInit {
  public response!: string;

  constructor(
    private http: HttpClient
  ) {}

  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit(): void {
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
   */
  public get(): Observable<string> {
    // return this.http.get('https://jsonplaceholder.typicode.com/photos')
    // .map(this.handleResponse);
    return this.http.get('https://jsonplaceholder.typicode.com/photos', {responseType: 'text'});
  }

  /**
   * [handleResponse description]
   * @method handleResponse
   */
  private handleResponse(response: Response): Promise<string> {
    return response.text();
  }

  /**
   * [handleError description]
   * @method handleError
   */
  private handleError(error: any): void {
    console.log('Error', error);
  }
}
