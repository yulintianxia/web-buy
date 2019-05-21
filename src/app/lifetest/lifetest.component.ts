import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';

// tslint:disable-next-line:prefer-const
let logIndex: number = 1;
@Component({
  selector: 'app-lifetest',
  templateUrl: './lifetest.component.html',
  styleUrls: ['./lifetest.component.css']
})
export class LifetestComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input()
  name: string;
  logInit(msg: string) {
    console.log(`${logIndex++}-${msg}`);
  }
  constructor() {
    this.logInit('name属性在constructor里的值是:' + name);
  }

  ngOnInit() {
    this.logInit('ngOnit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    this.logInit('name属性在ngOnChanges里的值是:' + name);
  }
  ngDoCheck(): void {
    this.logInit('ngDoCheck');
  }
  ngAfterContentInit(): void {
    this.logInit('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    this.logInit('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    this.logInit('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    this.logInit('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    this.logInit('ngOnDestroy');
  }
}
