import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService {
  private httpClient: HttpClient | any = null;
  currentUserName: string | null = null;
  private urlPrefix: string = 'http://localhost:9090';

  constructor(private httpBackend: HttpBackend) {
  }

  public log(logMsg: string): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post(this.urlPrefix + "/api/routerlogger", { log: logMsg },
      //{ headers: new HttpHeaders().set("content-type", "text/plain") }
    );
  }
}
