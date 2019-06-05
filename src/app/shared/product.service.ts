import { Injectable, EventEmitter,  } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable(
)

export class ProductService {
  searchEvent: EventEmitter<ProductSerachParms> = new EventEmitter();

  constructor(private http: Http) { }
  getProducts(): Observable<Product[]> {
    return this.http.get('/api/product').map(
      res => res.json()
    )
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get('/api/product/' + id).map(
      res => res.json()
    )
  }
  getCommentsForProductId(id: number): Observable<Comment[]> {
     return this.http.get('/api/product/' + id + '/comments').map(
       res => res.json()
     )
  }

  getAllCategory(): string[] {
     return ['电子产品', '硬件设备', '图书']
  }

  search(params: ProductSerachParms): Observable<Product[]> {
    console.log(params);
    return this.http.get('/api/product', {search: this.encodeParams(params)}).map(
      res => res.json()
    )

  }

  private encodeParams(params: ProductSerachParms) {
    // console.log(params);
    // console.log(Object.keys(params)
    // .filter(key => params[key])
    // .reduce((sum: URLSearchParams, key: string) => {
    //   sum.append(key, params[key]);
    //   return sum
    // }, new URLSearchParams()));
    console.log(Object.keys(params)
    .filter(key => params[key]));
    return Object.keys(params)
    .filter(key => params[key])
    .reduce((sum: URLSearchParams, key: string) => {
      sum.append(key, params[key]);
      console.log(key, params[key], sum);
      return sum;
    }, new URLSearchParams());
  }
}

export class ProductSerachParms {
  constructor(
    public title: string,
    public price: number,
    public category: string
  ) {
  }
}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timeStamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ) { }
}