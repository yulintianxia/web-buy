import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Product, ProductService, Comment } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
// import { NgZone } from '@angular/core';
import { WebsocketService } from 'app/websocket.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  private imgURL = '../../assets/img/1.png';
  product: Product;
  comments: Comment[];
  productTitle: string;
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden: boolean = false;
  isWatched: boolean = false;
  currentBid: number;

  subscription: Subscription;
  constructor(private routerInfo: ActivatedRoute,
    private productService: ProductService,
    private cdf: ChangeDetectorRef,
    // private zone: NgZone,
    private wsService: WebsocketService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let productId: number = + this.routerInfo.snapshot.params['productId'];

    // this.product = this.productService.getProduct(productId);
    // this.comments = this.productService.getCommentsForProductId(productId);

    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
        this.cdf.markForCheck();    // 进行标注
        this.cdf.detectChanges();   // 要多加一行这个 执行一次变化检测
        console.log(this.product);
      } 
    );
     this.productService.getCommentsForProductId(productId).subscribe(
      comments => { 
        this.comments = comments;
        this.cdf.markForCheck();    // 进行标注
        this.cdf.detectChanges();   // 要多加一行这个 执行一次变化检测
        console.log(this.comments);
      }
     );

  }
  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating,
    this.newComment);
    this.comments.unshift(comment);
    this.newRating = 5;
    this.newComment = null;
    this.isCommentHidden = true;
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
      this.product.rating = sum / this.comments.length;
      console.log(this.product.rating);
  
  }
  watchProduct() {
    console.log(this.isWatched);
    /*  取消关注 */
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.isWatched = false;
        this.subscription = null;
      } else {
        this.isWatched = true;
        this.subscription =  this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
         .subscribe(
          products => {
            this.cdf.markForCheck();    // 进行标注
            this.cdf.detectChanges();   // 要多加一行这个 执行一次变化检测  
            let product = products.find(p => p.productId === this.product.id);
            this.currentBid = product.bid;
            console.log(products);
        }
      );
      }
  }
}
