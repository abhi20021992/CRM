import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../services/appAuthentication.service';
import { Router } from '@angular/router';
import { Observable, throwError  } from 'rxjs';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  intercept(request: HttpRequest<any>, newRequest: HttpHandler): Observable<HttpEvent<any>> {

    return newRequest.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        //if 401 response returned from api, logout from application & redirect to login page.
        this.authenticationService.logout();
        sessionStorage.clear();
        this.router.navigate(['/','login'])
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
