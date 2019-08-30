import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   registerForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.maxLength(15)]),
    emailAddress: new FormControl('',[Validators.pattern('[a-zA-Z]*')]),
    password: new FormControl('',[Validators.required]),
    termsConditions: new FormControl('',[Validators.required])
  });
 
  constructor() { }

  ngOnInit() {
  }

  register()
  {
    console.log(this.registerForm.value);
  }

}
