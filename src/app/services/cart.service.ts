import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items:any[]=[];
  public size=0;

  constructor(){}

  addToCart(item:any){
    ++this.size;
    this.items.push(item);
  }

  getItems(){
    return this.items.slice();
  }

}
