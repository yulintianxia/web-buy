import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

/* 单个校验*/
export function mobileValidator(control: FormControl): any {
    let reg = /^[0-9]{6,11}$/;
    let valid = reg.test(control.value);
    console.log('mobile的校验结果是' + valid);
    return valid ? null : { mobile: true };
}

/* 异步校验,当作构造器的第三个函数来传递 */
export function mobileAsyncValidator(control: FormControl): any {
    let reg = /^[0-9]{6,11}$/;
    let valid = reg.test(control.value);
    console.log('mobile的校验结果是' + valid);
    return Observable.of(valid ? null : { mobile: true }).delay(5000) ;
}

/* 多个校验 */
export function equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let checkpwd: FormControl = group.get('checkpwd') as FormControl;
    let valid: boolean = (password.value === checkpwd.value);
    console.log('密码校验', valid);
    /* 在html上写错误信息 */
    // return valid ? null : { equal: true };
    /* 在构造器定义错误信息 */
    return valid ? null : { equal: {describe: '密码和确认密码不一样' } };
}