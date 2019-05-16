import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  poduct: Product;
  productTitle: string;
  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    // this.productTitle = this.routerInfo.snapshot
    console.log(this.routerInfo.snapshot);
    let productId: number = this.routerInfo.snapshot.params['id'];
     this.poduct = this.productService.getProduct(productId);
  }

}
