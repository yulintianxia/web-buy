import { Component,  OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit {
  ngAfterContentInit(): void {
    // console.log('父组件投影内容初始化完毕');
  }
  ngAfterContentChecked(): void {
    // console.log('父组件投影内容变更完毕');
  }
  ngAfterViewInit(): void {
    // console.log('父组件视图内容全部完毕');
  }
 
  ngOnInit(): void {
    
  }
    constructor() {
       console.log('环境是' + environment.weixinhao);
    }
  }
