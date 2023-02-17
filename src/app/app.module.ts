import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCartService } from './add-to-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AddToCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
