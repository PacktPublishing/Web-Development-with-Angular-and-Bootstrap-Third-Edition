import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

    private authUser:any;
    private authState:any;
    private loggedInUser = false;
    public userToken:any;

   constructor(public afAuth: AngularFireAuth, private router :Router) {

      this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      });
  }

  login() {
    
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res => {

        this.userToken = res.credential['accessToken'];

      })
      .catch(error => {
        console.log(error.message);
      });

      console.log(this.userToken);
    this.loggedInUser = true;

    this.router.navigate(['/profile']);

  }
  logout() {
    this.afAuth.auth.signOut();
    this.loggedInUser = false;
    this.userToken = '';
  }

  isLoggedInUser(){
      if(this.userToken != '')
        return true;
      else 
        return false;
  }


}
