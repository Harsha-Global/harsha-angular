import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService
{
  private httpClient: HttpClient;
  currentUserName: string = null;

  constructor(private httpBackend: HttpBackend)
  {
  }

  public log(logMsg: string): Observable<any>
  {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post("http://localhost:9090/api/routerlogger", logMsg,
    { headers: new HttpHeaders().set("content-type", "text/plain") }
    );
  }
}
