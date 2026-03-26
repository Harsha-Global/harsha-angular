import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService implements CanActivate
{
  constructor(private loginService : LoginService, private router : Router)
  {
  }

  canActivate(route: ActivatedRouteSnapshot) : boolean
  {
    console.log(this.router.url);
    if (this.loginService.isAuthenticated())
    {
      return true; //the user can navigate to the particular route
    }
    else
    {
      this.router.navigate([ "login" ]);
      return false; //the user can't navigate to the particular route
    }
  }
}
