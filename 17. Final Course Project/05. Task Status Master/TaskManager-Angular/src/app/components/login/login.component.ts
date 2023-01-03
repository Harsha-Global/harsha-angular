import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../../models/login-view-model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router : Router) 
  {
  }

  ngOnInit()
  {
  }

  onLoginClick(event)
  {
    this.loginService.Login(this.loginViewModel).subscribe(
      (response) => {
        this.router.navigate([ "/admin", "dashboard"]);
      },
      (error) => {
        console.log(error);
        this.loginError = "Invalid Username or Password";
      },
    );
  }

}
