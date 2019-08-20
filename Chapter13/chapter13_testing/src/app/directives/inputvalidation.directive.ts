import { Directive } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputvalidation]'
})
export class InputvalidationDirective {

  constructor() { }

  @HostBinding("style.background-color") backgroundColor: string;

  @HostListener('focus') onFocus() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('blur') onBlur() {
    this.backgroundColor = 'red';
  }

}
