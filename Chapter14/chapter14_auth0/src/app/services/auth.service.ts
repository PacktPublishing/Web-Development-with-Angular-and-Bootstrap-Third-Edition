import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { tokenNotExpired } from 'angular-jwt';
import { Auth0Lock} from 'auth0-lock';

declare var Auth0Lock;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  
   lock = new Auth0Lock('XvVLuuMQr3kKAR3ECAmBZOiPPyVYehvU','srinix.auth0.com',{
    allowedConnections: ["Username-Password-Authentication","google-oauth2"],
    rememberLastLogin: false,
    socialButtonStyle: "big",
    languageDictionary: {"title":"Auth0"},
    language: "en",
    responseType: 'token id_token',
    theme: {}
      });

  constructor(private router: Router) { 

    this.lock.on('authenticated', (authResult: any) => {
      console.log(authResult);
      localStorage.setItem("userToken", authResult.accessToken);
      this.router.navigate(['/profile']); 
    });

    this.lock.on('authorization_error', error => {
      console.log('something went wrong', error);
    });
   
  }

  isLoggedIn() {
    var token = localStorage.getItem('userToken');
    if(token != '')
    {
      return true;
    }
    else {
      return false;
    }
  }

  login() {

  this.lock.show(function(err, profile, token){
    console.log(err);
    console.log(profile);
    console.log(token);
  });
  }

  logout(){
      localStorage.setItem('userToken','');
      this.router.navigate(['/']);
  }

}
