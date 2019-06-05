import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
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
import { TestComponent } from './test/test.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { PriceTestComponent } from './price-test/price-test.component';
import { LifetestComponent } from './lifetest/lifetest.component';
import { ChildComponent } from './child/child.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';
import { MobilevalidatorDirective } from './directive/mobilevdirective/mobilevalidator.directive';
import { AsyncmobilevalidatorDirective } from './directive/mobilevdirective/asyncmobilevalidator.directive';
import { StoresComponent } from './stores/stores.component';
import { WebsockComponent } from './websock/websock.component';
import { WebsocketService } from './websocket.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



const routeConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productdetail/:productId', component: ProductDetailComponent }
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
    ProductDetailComponent,
    TestComponent,
    MultiplePipe,
    FilterPipe,
    PriceTestComponent,
    LifetestComponent,
    ChildComponent,
    TemplateformComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent,
    MobilevalidatorDirective,
    AsyncmobilevalidatorDirective,
    StoresComponent,
    WebsockComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig,
      { enableTracing: true })
  ],
  providers: [ProductService, WebsocketService,
  {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
