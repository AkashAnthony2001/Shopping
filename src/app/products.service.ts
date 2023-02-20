import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:any[]=[
    {id:1,name:"Mobile-1",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-09.jpg",rating:4.5,quan:0},
    {id:2,name:"Mobile-2",description:"A mobile prooduct with new features and nice camera.",price:14499,type:"Mobiles",image:"assets/Mobiles/mob-02.jpg",rating:4.5,quan:0},
    {id:3,name:"Mobile-3",description:"A mobile prooduct with new features and nice camera.",price:14999,type:"Mobiles",image:"assets/Mobiles/mob-04.jpg",rating:4.5,quan:0},
    {id:4,name:"Mobile-4",description:"A mobile prooduct with new features and nice camera.",price:44999,type:"Mobiles",image:"assets/Mobiles/mob-04.jpg",rating:4.5,quan:0},
    {id:5,name:"Mobile-5",description:"A mobile prooduct with new features and nice camera.",price:14999,type:"Mobiles",image:"assets/Mobiles/mob-05.jpg",rating:4.5,quan:0},
    {id:6,name:"Mobile-6",description:"A mobile prooduct with new features and nice camera.",price:154999,type:"Mobiles",image:"assets/Mobiles/mob-06.jpg",rating:4.5,quan:0},
    {id:7,name:"Mobile-7",description:"A mobile prooduct with new features and nice camera.",price:124999,type:"Mobiles",image:"assets/Mobiles/mob-07.jpg",rating:4.5,quan:0},
    {id:8,name:"Mobile-8",description:"A mobile prooduct with new features and nice camera.",price:444999,type:"Mobiles",image:"assets/Mobiles/mob-08.jpg",rating:4.5,quan:0},
    {id:9,name:"Mobile-9",description:"A mobile prooduct with new features and nice camera.",price:74999,type:"Mobiles",image:"assets/Mobiles/mob-09.jpg",rating:4.5,quan:0},
    {id:10,name:"Mobile-10",description:"A mobile prooduct with new features and nice camera.",price:74959,type:"Mobiles",image:"assets/Mobiles/mob-10.jpg",rating:4.5,quan:0},
    {id:11,name:"Laptop-1",description:"A Laptop with a 512 ssd and 8gb Ram.",price:44999,type:"Laptops",image:"assets/Laptops/lap-01.jpg",rating:4.5,quan:0},
    {id:12,name:"Laptop-2",description:"A Laptop with a 512 ssd and 8gb Ram.",price:54999,type:"Laptops",image:"assets/Laptops/lap-02.jpg",rating:4.5,quan:0},
    {id:13,name:"Laptop-3",description:"A Laptop with a 512 ssd and 8gb Ram.",price:34999,type:"Laptops",image:"assets/Laptops/lap-03.jpg",rating:4.5,quan:0},
    {id:14,name:"Laptop-4",description:"A Laptop with a 512 ssd and 8gb Ram.",price:24999,type:"Laptops",image:"assets/Laptops/lap-04.jpg",rating:4.5,quan:0},
    {id:15,name:"Laptop-5",description:"A Laptop with a 512 ssd and 8gb Ram.",price:64999,type:"Laptops",image:"assets/Laptops/lap-05.jpg",rating:4.5,quan:0},
    {id:17,name:"Laptop-6",description:"A Laptop with a 512 ssd and 8gb Ram.",price:74999,type:"Laptops",image:"assets/Laptops/lap-06.jpg",rating:4.5,quan:0},
    {id:18,name:"Laptop-7",description:"A Laptop with a 512 ssd and 8gb Ram.",price:34999,type:"Laptops",image:"assets/Laptops/lap-07.jpg",rating:4.5,quan:0},
    {id:19,name:"Laptop-8",description:"A Laptop with a 512 ssd and 8gb Ram.",price:35999,type:"Laptops",image:"assets/Laptops/lap-08.jpg",rating:4.5,quan:0},
    {id:20,name:"Laptop-9",description:"A Laptop with a 512 ssd and 8gb Ram.",price:45999,type:"Laptops",image:"assets/Laptops/lap-09.jpg",rating:4.5,quan:0},
    {id:21,name:"Laptop-10",description:"A Laptop with a 512 ssd and 8gb Ram.",price:64999,type:"Laptops",image:"assets/Laptops/lap-10.jpg",rating:4.5,quan:0},
    {id:22,name:"Earphones-1",description:"",price:1400,type:"Earphones",image:"assets/Earphones/ear-01.jpg",rating:4.5,quan:0},
    {id:23,name:"Earphones-2",description:"",price:1500,type:"Earphones",image:"assets/Earphones/ear-02.jpg",rating:4.5,quan:0},
    {id:24,name:"Earphones-3",description:"",price:1600,type:"Earphones",image:"assets/Earphones/ear-03.jpg",rating:4.5,quan:0},
    {id:25,name:"Earphones-4",description:"",price:1700,type:"Earphones",image:"assets/Earphones/ear-04.jpg",rating:4.5,quan:0},
    {id:26,name:"Earphones-5",description:"",price:1200,type:"Earphones",image:"assets/Earphones/ear-05.jpg",rating:4.5,quan:0},
    {id:27,name:"Earphones-6",description:"",price:1000,type:"Earphones",image:"assets/Earphones/ear-06.jpg",rating:4.5,quan:0},
    {id:28,name:"Earphones-7",description:"",price:999,type:"Earphones",image:"assets/Earphones/ear-07.jpg",rating:4.5,quan:0},
    {id:29,name:"Earphones-8",description:"",price:899,type:"Earphones",image:"assets/Earphones/ear-08.jpg",rating:4.5,quan:0},
    {id:30,name:"Earphones-9",description:"",price:450,type:"Earphones",image:"assets/Earphones/ear-09.jpg",rating:4.5,quan:0},
    {id:31,name:"Earphones-10",description:"",price:550,type:"Earphones",image:"assets/Earphones/ear-10.jpg",rating:4.5,quan:0},
    {id:32,name:"Watches-1",description:"",price:3500,type:"Watches",image:"assets/Watches/wat-01.jpg",rating:4.5,quan:0},
    {id:33,name:"Watches-2",description:"",price:2700,type:"Watches",image:"assets/Watches/wat-02.jpg",rating:4.5,quan:0},
    {id:34,name:"Watches-3",description:"",price:2300,type:"Watches",image:"assets/Watches/wat-03.jpg",rating:4.5,quan:0},
    {id:35,name:"Watches-4",description:"",price:1700,type:"Watches",image:"assets/Watches/wat-04.jpg",rating:4.5,quan:0},
    {id:36,name:"Watches-5",description:"",price:1600,type:"Watches",image:"assets/Watches/wat-05.jpg",rating:4.5,quan:0},
    {id:37,name:"Watches-6",description:"",price:1345,type:"Watches",image:"assets/Watches/wat-06.jpg",rating:4.5,quan:0},
    {id:38,name:"Watches-7",description:"",price:1200,type:"Watches",image:"assets/Watches/wat-07.jpg",rating:4.5,quan:0},
    {id:39,name:"Watches-8",description:"",price:1100,type:"Watches",image:"assets/Watches/wat-08.jpg",rating:4.5,quan:0},
    {id:40,name:"Watches-9",description:"",price:1500,type:"Watches",image:"assets/Watches/wat-09.jpg",rating:4.5,quan:0},
    {id:1,name:"Watches-10",description:"",price:1600,type:"Watches",image:"assets/Watches/wat-10.jpg",rating:4.5,quan:0},

  ];

  cartitems:any[]=[];

  returnproducts(){
    return this.products;
  }

  getmobiles(){
    return this.products.filter(id => id.type === "Mobiles");
  }
  getlaptops(){
    return this.products.filter(id=> id.type === "Laptops");
  }
  getearphones(){
    return this.products.filter(id=> id.type === "Earphones");
  }
  getwatches(){
    return this.products.filter(id => id.type === "Watches");
  }

  sendcart(i:any){
      this.cartitems.push(i);
  }

  showcart(){
      return this.cartitems;
  }
}
