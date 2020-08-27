import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service'
import { CartProduct } from '../../modals/cartProduct'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public localCart: CartProduct[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.localCart = this.cartService.fetchCartProduct();

  }

  increaseQauntity(product) {
    this.cartService.addFinalToCart(product.product)
    this.localCart = this.cartService.fetchCartProduct();
  }
  decreaseQuantity(product) {
    this.cartService.RemoveFromFinalCart(product.product);
    this.localCart = this.cartService.fetchCartProduct();
  }

  deleteCartItem(product) {
    console.log("0000>>>", product);
    this.cartService.RemoveCartItem(product);
    this.localCart = this.cartService.fetchCartProduct();
  }

}