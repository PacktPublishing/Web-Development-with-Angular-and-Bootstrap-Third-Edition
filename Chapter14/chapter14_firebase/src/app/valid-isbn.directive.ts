import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[validISBN]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidISBNDirective, multi: true }
  ]
})
export class ValidISBNDirective implements Validator {

  validate(c: FormControl): ValidationErrors | null {
    return ValidISBNDirective.validateISBN(c);
  }

  static validateISBN(control: FormControl): ValidationErrors | null {
    if (control.value.length < 13) {
      return { isbn: 'A credit card number must be 16-digit long' };
    }
    if (!control.value.startsWith('Packt')) {
      return { isbn: 'Value should start with Packt' };
    }
  
    return null;
  }
}
