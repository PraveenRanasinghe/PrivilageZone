import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  validateUser(){
    return this.isLoggedIn;
  }

  Login(){
    this.isLoggedIn;
  }

  Logout(){
    this.isLoggedIn;
  }
}
