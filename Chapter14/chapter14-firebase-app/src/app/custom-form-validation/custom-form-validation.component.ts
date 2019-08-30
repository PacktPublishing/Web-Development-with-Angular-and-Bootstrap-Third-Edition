import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-custom-form-validation',
  templateUrl: './custom-form-validation.component.html',
  styleUrls: ['./custom-form-validation.component.scss']
})
export class CustomFormValidationComponent implements OnInit {

loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(13)]),
    lastName: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit() {
  }

   displayData(form) {
      console.log(form.value);

  }

}
