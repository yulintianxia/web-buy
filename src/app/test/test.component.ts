import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
   searcherInput: FormControl = new FormControl();
   size: number = 5;
   dates: Date = new Date();
    constructor() { 
    
  }

  ngOnInit() {
  }

}
