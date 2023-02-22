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

  
  sendtocart(i:any){
    this.prodserv.sendcart(i)
    alert("Product Added To Cart");
  }

  

  gotocart(){
    this.route.navigateByUrl("/cart_page")
  }
}
