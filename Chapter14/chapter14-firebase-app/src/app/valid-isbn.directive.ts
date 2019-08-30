import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[validISBN]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidISBNDirective, multi: true }
  ]
})
export class ValidISBNDirective implements Validator {

  static validateISBN(control: FormControl): ValidationErrors | null {
    if (control.value.length < 13) {
      return { isbn: 'ISBN number must be 13 digit long' };
    }
    if (!control.value.startsWith('Packt')) {
      return { isbn: 'Value should start with Packt' };
    }
    return null;
  }

  validate(c: FormControl): ValidationErrors | null {
    return ValidISBNDirective.validateISBN(c);
  }
}
