import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  constructor(private httpClient : HttpClient)
  {
  }

  currentUserName: string  = null;

  public Login(loginViewModel: LoginViewModel): Observable<any>
  {
    return this.httpClient.post<any>("/authenticate", loginViewModel, { responseType: "json" })
    .pipe(map(user => {
      if (user)
      {
        this.currentUserName = user.userName;
        sessionStorage.currentUser = JSON.stringify(user);
      }
      return user;
    }));
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }
}
