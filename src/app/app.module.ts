import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SerarchComponent } from './serarch/serarch.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from 'app/shared/product.service';


const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SerarchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
