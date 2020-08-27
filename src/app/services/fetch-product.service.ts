import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FetchProductService {

  constructor(private http:HttpClient) { }

  fetchProduct(){
    const url:string = "assets/product.json"
    return this.http.get(url);
  }
  fetchCategoy(){
    const url:string = "assets/category.json"
    return this.http.get(url);
  }
}
