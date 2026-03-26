import { HttpInterceptorFn, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (request, next) =>
{
 return next(request).pipe(
  catchError((error: any) => {
   if (error instanceof HttpErrorResponse)
   {
    switch (error.status)
    {
     case 0:
      console.error('Server is unreachable. Please check your connection.');
      break;
     case 401:
      console.error('Unauthorized - Session may have expired.');
      break;
     case 403:
      console.error('Access denied - You don\'t have permission.');
      break;
     case 404:
      console.error('Resource not found.');
      break;
     case 500:
     case 501:
     case 502:
     case 503:
      console.error('Server error occurred. Please try again later.');
      break;
     
     default:
      console.error(`HTTP Error: ${error.status} - ${error.message}`);
    }
   }
   else
   {
    console.error(`An unexpected error occurred: `, error);
   }

   return throwError(() => error);
  })
 );
};
