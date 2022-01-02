import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  constructor(public loginService: LoginService, private domSanitizer: DomSanitizer)
  {
  }

  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }
}
