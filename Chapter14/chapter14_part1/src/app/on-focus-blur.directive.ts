import { Directive } from '@angular/core';
import { HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnFocusBlur]'
})
export class OnFocusBlurDirective {

  constructor() { }

  @HostBinding("style.background-color") backgroundColor;

  @HostListener('focus') onFocus() {
    this.backgroundColor = '#19ffe4';
  }

  @HostListener('blur') onBlur() {
    this.backgroundColor = '#ff1934';
  }
}
