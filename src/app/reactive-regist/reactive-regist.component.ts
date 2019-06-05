import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { equalValidator, mobileValidator, mobileAsyncValidator } from 'app/validators/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {


   /* 自己书写构造器 */
  //  mobileValidator(control: AbstractControl): {[key:sring]:any}{
  //   return null;
  // };



  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordGroup: new FormGroup({
    //      password: new FormControl(),
    //      checkpwd: new FormControl(),
    //   }) 
    // })
    // 注意可以使用FormBuilder简化代码
     this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6), ]],
      /* 异步校验,当作构造器的第三个函数来传递 */
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordGroup:  fb.group({
         password: ['', [ Validators.minLength(6), ]],
         checkpwd: [''],
      }, {validator: equalValidator}) 
    }) 
   }
   submit() {
    //  let isValid: boolean =  this.formModel.get('username').valid;
    //  console.log(isValid);
    //  let error: any = this.formModel.get('username').errors;
    //  /*  错误信息 */
    //  console.log(JSON.stringify(error));
    // console.log(this.formModel.value);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
