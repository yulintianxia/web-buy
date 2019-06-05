import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileAsyncValidator } from 'app/validators/validators';

@Directive({
  selector: '[appAsyncmobilevalidator]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileAsyncValidator, multi: true},]
})
export class AsyncmobilevalidatorDirective {

  constructor() { }

}
