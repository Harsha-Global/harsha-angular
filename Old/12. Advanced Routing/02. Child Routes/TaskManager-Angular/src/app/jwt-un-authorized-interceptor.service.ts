import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorService implements HttpInterceptor
{
  constructor()
  {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle(request).pipe(tap(

      (event: HttpEvent<any>) =>
      {
        if (event instanceof HttpResponse)
        {
          //do something with response
        }
      },

      (error: any) =>
      {
        if (error instanceof HttpErrorResponse)
        {
          if (error.status == 401)
          {
            console.log(error);
            alert("401 UnAuthorized");
          }
        }
      }

    ));
  }
}


