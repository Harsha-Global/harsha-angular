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

  //myProperty = "<script>alert(document.cookie)</script>";
  //myProperty = this.domSanitizer.bypassSecurityTrustHtml("<iframe src='http://www.lipsum.com'></iframe>");
  //myProperty = this.domSanitizer.bypassSecurityTrustUrl("javascript:window.open('http://www.google.com')");
  myProperty = this.domSanitizer.bypassSecurityTrustResourceUrl("https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg");

  onSearchClick()
  {
    console.log(this.loginService.currentUserName);
  }
}
