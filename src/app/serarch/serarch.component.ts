import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductService } from 'app/shared/product.service';

@Component({
  selector: 'app-serarch',
  templateUrl: './serarch.component.html',
  styleUrls: ['./serarch.component.css']
})
export class SerarchComponent implements OnInit {
  formModel: FormGroup;
  categoryies: string[];
  constructor(private productService: ProductService, fb: FormBuilder ) { 
    // let fb = new FormBuilder();
    this.formModel = fb.group({
        title: ['', [Validators.minLength(3)]],
        price: [null, this.postiveNumberValidor],
        category: ['-1']
    })
  }

  postiveNumberValidor(control: FormControl): any  {
    if (!control.value) {
      return null;
    } 
    const price   = Number.parseInt(control.value);
    if (price > 0) {
      return null;
    } else {
      return {postiveNumber: true }
    }
  }  
  onSerach() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(this.formModel.value);
    }
  }
  ngOnInit() {
    this.categoryies = this.productService.getAllCategory();
  }

}
