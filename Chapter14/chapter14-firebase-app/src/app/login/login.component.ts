import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { AppAuthService } from '../app-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    lastName: new FormControl(''),
  });


  constructor(private _appAuthService : AppAuthService) { }


  ngOnInit() {
  }

   onSubmit(){
      this._appAuthService.login();
      console.warn(this.loginForm.value);
  }
    
}
