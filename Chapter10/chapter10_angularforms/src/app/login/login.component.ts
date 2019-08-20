import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor() { }

  login(loginForm)
  {
    debugger;
    console.log(loginForm);
    console.log(loginForm.username);
  }
}
