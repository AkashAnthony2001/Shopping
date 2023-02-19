import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products:any[]=[
    {name:"Mobile-1",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-09.jpg",rating:4.5,quan:0},
    {name:"Mobile-2",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-02.jpg",rating:4.5,quan:0},
    {name:"Mobile-3",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-04.jpg",rating:4.5,quan:0},
    {name:"Mobile-4",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-04.jpg",rating:4.5,quan:0},
    {name:"Mobile-5",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-05.jpg",rating:4.5,quan:0},
    {name:"Mobile-6",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-06.jpg",rating:4.5,quan:0},
    {name:"Mobile-7",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-07.jpg",rating:4.5,quan:0},
    {name:"Mobile-8",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-08.jpg",rating:4.5,quan:0},
    {name:"Mobile-9",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-09.jpg",rating:4.5,quan:0},
    {name:"Mobile-10",description:"A mobile prooduct with new features and nice camera.",price:144999,type:"Mobiles",image:"assets/Mobiles/mob-10.jpg",rating:4.5,quan:0},
    {name:"Laptop-1",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-01.jpg",rating:4.5,quan:0},
    {name:"Laptop-2",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-02.jpg",rating:4.5,quan:0},
    {name:"Laptop-3",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-03.jpg",rating:4.5,quan:0},
    {name:"Laptop-4",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-04.jpg",rating:4.5,quan:0},
    {name:"Laptop-5",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-05.jpg",rating:4.5,quan:0},
    {name:"Laptop-6",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-06.jpg",rating:4.5,quan:0},
    {name:"Laptop-7",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-07.jpg",rating:4.5,quan:0},
    {name:"Laptop-8",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-08.jpg",rating:4.5,quan:0},
    {name:"Laptop-9",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-09.jpg",rating:4.5,quan:0},
    {name:"Laptop-10",description:"",price:144999,type:"Laptops",image:"assets/Laptops/lap-10.jpg",rating:4.5,quan:0},
    {name:"Earphones-1",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-01.jpg",rating:4.5,quan:0},
    {name:"Earphones-2",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-02.jpg",rating:4.5,quan:0},
    {name:"Earphones-3",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-03.jpg",rating:4.5,quan:0},
    {name:"Earphones-4",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-04.jpg",rating:4.5,quan:0},
    {name:"Earphones-5",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-05.jpg",rating:4.5,quan:0},
    {name:"Earphones-6",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-06.jpg",rating:4.5,quan:0},
    {name:"Earphones-7",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-07.jpg",rating:4.5,quan:0},
    {name:"Earphones-8",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-08.jpg",rating:4.5,quan:0},
    {name:"Earphones-9",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-09.jpg",rating:4.5,quan:0},
    {name:"Earphones-10",description:"",price:144999,type:"Earphones",image:"assets/Earphones/ear-10.jpg",rating:4.5,quan:0},
    {name:"Watches-1",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-01.jpg",rating:4.5,quan:0},
    {name:"Watches-2",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-02.jpg",rating:4.5,quan:0},
    {name:"Watches-3",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-03.jpg",rating:4.5,quan:0},
    {name:"Watches-4",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-04.jpg",rating:4.5,quan:0},
    {name:"Watches-5",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-05.jpg",rating:4.5,quan:0},
    {name:"Watches-6",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-06.jpg",rating:4.5,quan:0},
    {name:"Watches-7",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-07.jpg",rating:4.5,quan:0},
    {name:"Watches-8",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-08.jpg",rating:4.5,quan:0},
    {name:"Watches-9",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-09.jpg",rating:4.5,quan:0},
    {name:"Watches-10",description:"",price:144999,type:"Watches",image:"assets/Watches/wat-10.jpg",rating:4.5,quan:0},

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
