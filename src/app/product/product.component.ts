import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'app/shared/product.service';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // private products: Array<Product>
  private Products: Product[];
  private imgURL= '../../assets/img/1.png';
  private keyWord: string;
  private titleFilter: FormControl  =  new FormControl();
  constructor(private productService: ProductService, router: Router) {
  this.titleFilter.valueChanges.debounceTime(500).subscribe(
   value => {
        // console.log(value);
        this.keyWord = value}
    )
  }
  ngOnInit() {
    this.Products = this.productService.getProducts();
    // console.log(this.Products);
  }
}


