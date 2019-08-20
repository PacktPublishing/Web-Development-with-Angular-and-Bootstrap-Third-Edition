import { FormControl } from '@angular/forms';

export class CustomFormValidator {
  static validOrderId(fc: FormControl){
    
    const expr = /[-\\\/]/;
    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return ({validOrderId: true});
    } else {
      return (null);
    }
  }
}