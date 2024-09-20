import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  

  constructor (private auth : AuthService, private router: Router) {

  }

  username = '';
  password = '';
  errorMessage: string = '';

  login () {
    if (this.username.trim().length === 0) {
      this.errorMessage = "User Name is required !";
    }else if (this.password.trim().length === 0) {
      this.errorMessage = "Password is required !";
    }else{
      this.errorMessage = "";
      let response:number = this.auth.login(this.username, this.password)

      if (response === 200) {
        this.router.navigate(["home"]);
      } else {
        this.errorMessage = "Incorrect credentials !"
      }
    }
  }

} 
