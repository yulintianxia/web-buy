import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , AfterContentInit, AfterContentChecked {
  ngAfterContentInit(): void {
    console.log('子组件投影内容初始化完毕');
  }
  ngAfterContentChecked(): void {
    console.log('子组件投影内容变更完毕');
  }

  constructor() { }

  ngOnInit() {
  }
  greeting(name: string) {
    console.log('hello' + name);
  }
}
