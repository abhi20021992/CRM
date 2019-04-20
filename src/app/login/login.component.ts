import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthenticationService } from 'app/services/appAuthentication.service';
import { User } from 'app/modals/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    if (this.authenticationService.isUserAuthenticated()) {
      this.router.navigate(['/', 'dashboard']);
    }
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  hide = true;
  loginPageHtml: any;

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  ngOnInit() {
    this.authenticationService.loginPage().subscribe(s=>{
      this.loginPageHtml = s;
    })
  }

  login() {
   const userInfo: User = {
      UserName: this.email.value,
      IsOnline: true,
      Password: this.password.value,
      RememberMe: false,
      Email: this.email.value
    };
   this.authenticationService.login(userInfo);
    
  }
}


