import { Injectable } from '@angular/core';
import { CarItems } from '../models/caritems';
import { CartItem } from '../models/cartitem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CarItems.find(c=>c.product.productId===product.productId);
    if(item){
      item.quantity +=1;
    }else{
        let cartItem = new CartItem()
        cartItem.product =product;
        cartItem.quantity=1;
        CarItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item:CartItem = CarItems.find(c=>c.product.productId===product.productId);
    CarItems.splice(CarItems.indexOf(item),1);
  }
  list():CartItem[]{
    return CarItems;
  }
}
