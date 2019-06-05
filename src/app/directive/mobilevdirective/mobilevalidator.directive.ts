import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from 'app/validators/validators';

@Directive({
  selector: '[appMobilevalidator]',
  // useValue:校验方法
  providers: [ {provide: NG_VALIDATORS, useValue: mobileValidator, multi: true} ]
})
export class MobilevalidatorDirective {

  constructor() { }

}
