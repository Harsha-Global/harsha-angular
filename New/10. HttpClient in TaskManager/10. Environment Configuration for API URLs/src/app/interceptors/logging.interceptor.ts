import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (request, next) => {
 const startTime = Date.now();

 console.log('--- Outgoing Request ---');
 console.log('URL: ', request.url);
 console.log('Method: ', request.method);

 return next(request).pipe(
  tap({
   next: (event) => {
    if (event instanceof HttpResponse)
    {
     const elapsedTime = Date.now() - startTime;
     console.log('--- Response Received ---');
     console.log('URL: ', request.url);
     console.log('Status: ', event.status);
     console.log('Time: ', elapsedTime + ' ms');
    }
   },
   error: (error) => {
    const elapsedTime = Date.now() - startTime;
    console.error('--- Request Failed ---');
    console.error('URL: ', request.url);
    console.error('Error:', error);
    console.error('Failed after: ', elapsedTime + ' ms');
   }
  })
 );
};