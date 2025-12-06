import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  constructor(public loginService: LoginService)
  {
  }

  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }
}
