import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'
import * as $ from 'jquery'
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartCount = 0;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {

    this.cartservice.cartCountEmitter.subscribe(
      (count) => {
        this.cartCount = count;

      }
    )
    this.cartservice.fetchCartProduct();

  }

}
