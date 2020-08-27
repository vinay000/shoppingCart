import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CartProduct} from '../modals/cartProduct'
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartCountEmitter = new EventEmitter<number>();

  public cartProductArray:CartProduct[] = []

  constructor(private http:HttpClient) {
    this.fetchCartProduct(); 
   }

  addFinalToCart(product:Product){
    // this.cartProductArray.forEach(i => {
    //    })
    let flagProductExist = false;
    for(let i=0; i<this.cartProductArray.length;i++){
        if(this.cartProductArray[i].product && this.cartProductArray[i].product.id==product.id){
          this.cartProductArray[i].quantity++;
          flagProductExist = true;
        }
    }
    if(!flagProductExist){
      this.cartProductArray.push({product:product,quantity:1})
    }
    
    // console.log("cartArray>>>>",this.cartProductArray)
    localStorage.setItem("cart",JSON.stringify(this.cartProductArray))

  }
  RemoveFromFinalCart(product:Product){
    // console.log("product>>>>",product,this.cartProductArray)
     for(let i=0; i<this.cartProductArray.length;i++){
        if(this.cartProductArray[i].product && this.cartProductArray[i].product.id==product.id){
          this.cartProductArray[i].quantity-- ;
          if(this.cartProductArray[i].quantity==0)
            this.cartProductArray.splice(i,1);
            console.log("splice",this.cartProductArray);
        }
    }
    
    // console.log("cartArray product>>>>",this.cartProductArray)
    localStorage.setItem("cart",JSON.stringify(this.cartProductArray))


  }

  fetchCartProduct(){
    this.cartProductArray = JSON.parse(localStorage.getItem("cart")) || []
    this.cartCountEmitter.emit(this.cartProductArray && this.cartProductArray.length?  this.cartProductArray.length:0)
    return this.cartProductArray
  }

  RemoveCartItem(product){
    const index: number = this.cartProductArray.indexOf(product);
    if (index !== -1) {
      this.cartProductArray.splice(index, 1);
    localStorage.setItem("cart",JSON.stringify(this.cartProductArray))

  }    
  }

}
