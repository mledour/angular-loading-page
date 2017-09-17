import { Injectable, Injector } from '@angular/core';
import { Http, XHRBackend, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { HttpObservableService } from './http-observable.service';

@Injectable()
export class HttpInterceptorService extends Http {
  private httpObservableService: HttpObservableService;

  /**
   * @method constructor
   * @param  {ConnectionBackend} connectionBackend [description]
   * @param  {RequestOptions}    requestOptions    [description]
   */
  constructor(connectionBackend: ConnectionBackend, requestOptions: RequestOptions, private injector: Injector) {
    super(connectionBackend, requestOptions);
    this.httpObservableService = injector.get(HttpObservableService);
  }

  /**
   * [request description]
   * @method request
   * @param  {string            |       Request}     url [description]
   * @param  {RequestOptionsArgs}   options [description]
   * @return {Observable<Response>}         [description]
   */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.httpObservableService.onRequestStart();

    return super.request(url, options).finally(() => {
      this.httpObservableService.onRequestDone();
    });
  }
}

/**
 * [httpInterceptorServiceFactory description]
 * @method httpInterceptorServiceFactory
 * @param  {XHRBackend}                  xhrBackend     [description]
 * @param  {RequestOptions}              requestOptions [description]
 * @return {Http}                                       [description]
 */
export function httpInterceptorServiceFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, injector: Injector): Http {
    return new HttpInterceptorService(xhrBackend, requestOptions, injector);
}
