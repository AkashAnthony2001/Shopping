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

  dec(i:any){
    if(i.quan != 0){
    i.quan=i.quan - 1;
    }
  }
  inc(i:any){
    if(i.quan != 5){
    i.quan=i.quan + 1;
    }
  }

  
}
