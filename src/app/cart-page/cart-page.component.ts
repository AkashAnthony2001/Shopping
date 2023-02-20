import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
product:any[]=[]
  constructor(private cartserv:ProductsService) {
    this.product=this.cartserv.showcart()
   }

  ngOnInit(): void {
  }


}
