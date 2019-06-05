import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(value: any,  valid: boolean) {
    console.log(value, valid);
  }
  userValid: boolean = true;
  userUntached: boolean = true;

  onUser(form: NgForm){
    if (form) {
      this.userValid = form.form.get('username').valid;
      this.userUntached = form.form.get('username').untouched;
    }
  }
} 
