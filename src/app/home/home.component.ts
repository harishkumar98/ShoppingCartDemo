import {
  Component, OnInit
} from '@angular/core';


import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'demo';
  products$:any;
  constructor(private productService: ProductService,public cartService:CartService) {
    this.products$ = productService.getProducts();
    console.log(this.products$)
  }


  ngOnInit(): void {
  }

}
