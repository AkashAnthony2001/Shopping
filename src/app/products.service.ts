import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:any[]=[
    {
      name:"IPhone 13 Pro",
      description:"The biggest Pro camera system upgrade ever. Super Retina XDR display with Pro - Motion for a faster, more responsive feel.",
      price:144999,
      type:"Mobiles",
      image:"assets/Mobiles/01-ihpone-13-pro.png",
      rating:4.5
    },
    {
      name:"Laptops",
      description:"The biggest Pro camera system upgrade ever. Super Retina XDR display with Pro - Motion for a faster, more responsive feel.",
      price:144999,
      type:"Laptops",
      image:"assets/Mobiles/01-ihpone-13-pro.png",
      rating:4.5
    },
    {
      name:"Laptops",
      description:"The biggest Pro camera system upgrade ever. Super Retina XDR display with Pro - Motion for a faster, more responsive feel.",
      price:144999,
      type:"Laptops",
      image:"assets/Mobiles/01-ihpone-13-pro.png",
      rating:4.5
    },
    {
      name:"Earphones",
      description:"The biggest Pro camera system upgrade ever. Super Retina XDR display with Pro - Motion for a faster, more responsive feel.",
      price:144999,
      type:"Earphones",
      image:"assets/Mobiles/01-ihpone-13-pro.png",
      rating:4.5
    },
    {
      name:"Watches",
      description:"The biggest Pro camera system upgrade ever. Super Retina XDR display with Pro - Motion for a faster, more responsive feel.",
      price:144999,
      type:"Watches",
      image:"assets/Mobiles/01-ihpone-13-pro.png",
      rating:4.5
    },
  ]
  returnproducts(){
    return this.products;
  }

  getmobiles(){
    return this.products.filter(i => i.type === "Mobiles");
  }
  getlaptops(){
    return this.products.filter(i => i.type === "Laptops");
  }
  getearphones(){
    return this.products.filter(i => i.type === "Earphones");
  }
  getwatches(){
    return this.products.filter(i => i.type === "Watches");
  }
}
