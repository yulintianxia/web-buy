import { Component, OnInit } from '@angular/core';
import { Product, ProductService, Comment } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private imgURL= '../../assets/img/1.png';
  product: Product;
  comments: Comment[];
  productTitle: string;
  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let productId: number = + this.routerInfo.snapshot.params['productId'];

    this.product = this.productService.getProduct(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
    console.log(this.product, this.comments);
  }

}
