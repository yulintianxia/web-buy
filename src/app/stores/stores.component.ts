import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import {  Http, Headers } from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  dataSoure: Observable<any>;
  products: Array<any> = [];
  constructor(private http: Http) {
      let myheaders: Headers = new Headers();
      myheaders.append('Authorization', 'Basic 12356')
      this.dataSoure = this.http.get('/api/product', {headers: myheaders}).map((res) => res.json());
   }
   
  ngOnInit() {
    this.dataSoure.subscribe(
      (data) => this.products = data
    )
  }

}
