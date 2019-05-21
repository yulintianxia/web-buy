import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {NgZone} from '@angular/core';
@Component({
  selector: 'app-price-test',
  templateUrl: './price-test.component.html',
  styleUrls: ['./price-test.component.css']
})
export class PriceTestComponent implements OnInit {
   stockcode: string = 'IBM';
   price: number = 200;
   @Output()
   lastPrice: EventEmitter<PriceQuote> = new EventEmitter();
   buy: EventEmitter<PriceQuote> = new EventEmitter();
  constructor(private zone: NgZone) {
   setInterval(() => {
    // tslint:disable-next-line:prefer-const
    let pricestockcode: PriceQuote = new PriceQuote(
      this.stockcode, 100 * Math.random()
    )
    //强制更新视图
    this.zone.run(() => {
      this.price = pricestockcode.lastPrice;
     })

    this.lastPrice.emit(pricestockcode);
   }, 1000);
  }
  ngOnInit() {
  }
  buyStock(event) {
    this.buy.emit(new PriceQuote(this.stockcode, this.price));
  }
}

export class PriceQuote {
  constructor(public stockCode: string, public lastPrice: number) {

  }
}
