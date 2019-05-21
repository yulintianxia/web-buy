import { Component, ViewChild, OnInit } from '@angular/core';
import { PriceQuote } from './price-test/price-test.component';
import { ChildComponent } from './child/child.component';
// import * as  $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  divContent = '<div>div content</div>'
  @ViewChild('child1')
  child1: ChildComponent
  title = 'app-test';
  priceQuote: PriceQuote = new PriceQuote('', 0);
  priceQuotehadnler(event: PriceQuote ) {
   this.priceQuote = event;
  }
  ngOnInit(): void {
    // this.child1.greeting('Tom');
  }
}
