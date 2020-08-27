import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopAppsRoutingModule } from './shop-apps-routing.module';
import { CartComponent } from './cart/cart.component';
import { ShowProductComponent } from './show-product/show-product.component';


@NgModule({
  declarations: [CartComponent, ShowProductComponent],
  imports: [
    CommonModule,
    ShopAppsRoutingModule
  ],
  exports:[CartComponent, ShowProductComponent]
})
export class ShopAppsModule { }
