import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header to request

    //Get Token data from local storage
    let tokenInfo = sessionStorage.getItem('token');

    if (tokenInfo) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${tokenInfo}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }else{
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });
    }

    return newRequest.handle(request);
  }
}
