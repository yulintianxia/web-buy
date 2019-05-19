import { Injectable } from '@angular/core';

@Injectable(
)
// @Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 0.5, '这是第一个商品', ['电子', '硬件']),
    new Product(2, '第2个商品', 2.99, 1.5, '这是第二个商品', ['硬件']),
    new Product(3, '第3个商品', 3.99, 2.5, '这是第三个商品', ['电子']),
    new Product(4, '第4个商品', 4.99, 3.5, '这是第四个商品', ['硬件']),
    new Product(5, '第5个商品', 5.99, 4.5, '这是第五个商品', ['电子', '硬件']),
    new Product(5, '第6个商品', 6.99, 4.5, '这是第六个商品', ['电子']),
  ]
  private comments: Comment[] = [
    new Comment(1, 1, '2007-02-01', '张三', 3, '东西还可以'),
    new Comment(2, 2, '2007-02-02', '莉丝', 2, '太差了'),
    new Comment(3, 3, '2007-02-03', 'Tom', 4, '不错'),
    new Comment(4, 4, '2007-02-04', 'Jim', 3, '一般'),
    new Comment(5, 5, '2007-02-05', 'Bob', 2, '不喜欢'),
    new Comment(6, 6, '2007-02-06', 'Mike', 2, '讨厌'),
  ]
  constructor() { }
  getProducts() {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === id);
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public type: Array<string>,
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