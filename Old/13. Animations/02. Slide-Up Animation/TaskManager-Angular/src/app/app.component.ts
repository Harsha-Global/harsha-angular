import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLoggerService } from './router-logger.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { slideUpAnimation } from "./my-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideUpAnimation]
})
export class AppComponent {
  constructor(public loginService: LoginService, private domSanitizer: DomSanitizer, private routerLoggerService: RouterLoggerService, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let userName = (this.loginService.currentUserName) ? this.loginService.currentUserName : "anonymous";

        let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;

        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
  }

  onSearchClick() {
    console.log(this.loginService.currentUserName);
  }

  getState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path : "none";
  }
}
