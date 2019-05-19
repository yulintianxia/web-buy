import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'app/shared/product.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // private products: Array<Product>
  private Products: Product[];
  private imgURL= '../../assets/img/1.png';
    constructor(private productService: ProductService,
      router: Router,
      ) {
  }
  ngOnInit() {
    this.Products = this.productService.getProducts();
    // console.log(this.Products);
  }
}


