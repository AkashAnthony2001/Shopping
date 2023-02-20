import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
product:any[]=[]
  constructor(private prodserv:ProductsService , private route:Router) { 
    this.product=this.prodserv.returnproducts()
  }

  mobiles(){
    this.product=this.prodserv.getmobiles()
  }
  laptops(){
    this.product=this.prodserv.getlaptops()
  }
  earphones(){
    this.product=this.prodserv.getearphones()
  }
  watches(){ 
    this.product=this.prodserv.getwatches()
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
  sendtocart(i:any){
    this.prodserv.sendcart(i)
    this.route.navigateByUrl("cart_page")
  }

  

  gotocart(){
    this.route.navigateByUrl("/cart_page")
  }
}
