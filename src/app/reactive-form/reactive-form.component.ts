import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // 设置初始值,注意没法在formModel内使用，除非是formControls类
   username: FormControl = new FormControl('aaa');
  /*注意FormControl和FormArray都需要在FormGroup*/
  formModel: FormGroup = new FormGroup({
    username: new FormControl('bbb'),
    dateRange: new FormGroup({
       from: new FormControl(),
       to: new FormControl(),
    }),
    emails: new FormArray([
      new FormControl('a@@.com'),
      new FormControl('a@@.cn')
    ])
  });
  
  // emails: FormArray = new FormArray([
  //   new FormControl('a@@.com'),
  //   new FormControl('a@@.cn')
  // ]);
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
}
