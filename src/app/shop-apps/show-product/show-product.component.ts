import { Component, OnInit } from '@angular/core';
import {FetchProductService} from '../../services/fetch-product.service';
import { CartService } from "../../services/cart.service";
import {Product} from '../../modals/product';
import {CartProduct} from '../../modals/cartProduct';
@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  public productArray = []
  public categoryArray = []
  public filteredProductArray = []
  public selectedCategoryName: any //for showing in template
  constructor(public productService:FetchProductService, public cartService:CartService) { }

  ngOnInit(): void {
    
    this.productService.fetchCategoy().subscribe(
      (res:any)=>{
        this.categoryArray = res.categories;
        console.log(this.categoryArray);
      }
    )
    this.productService.fetchProduct().subscribe(
      (data:any)=>{
          this.productArray = data.products;
          this.filteredProductArray = data.products;
          console.log(this.productArray);
      }
    )

  }
  addToCart(product:Product){
    console.log("product",product);
   this.cartService.addFinalToCart(product)
   this.cartService.fetchCartProduct();
  }
  selectCategory(categoryName:string){

    this.filteredProductArray = this.productArray.filter(
      (product)=>{
        
        return product.product_category == categoryName
      }
    )
    console.log("category name",categoryName,this.filteredProductArray);
    
  }
  showAllCategory(){
    this.filteredProductArray = this.productArray;
  }

}
