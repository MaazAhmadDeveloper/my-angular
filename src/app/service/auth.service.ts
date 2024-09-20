import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login (username: string, password: string ) {
    if (username === 'maaz' && password === "123") {
      localStorage.setItem("auth", "yes")
      return 200;
    } else {
      return 403
    }
  }
}
