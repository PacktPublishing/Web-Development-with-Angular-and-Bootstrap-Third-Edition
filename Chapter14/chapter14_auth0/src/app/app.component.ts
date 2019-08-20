import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auth0 Tutorial';
  userToken:string;
  
  constructor(private authService: AuthService) {

  }
  login()
  {
    this.authService.login();
  }

  
   logout()
  {
    this.authService.logout();
  }
  
  isLoggedInUser(){
    return this.authService.isLoggedIn();
  }

}
