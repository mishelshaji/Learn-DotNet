import { CartService } from './../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cartItems:any;

    constructor(private cartService: CartService) {
        console.log(this.cartItems)
        setTimeout(() => {
            this.cartItems = this.cartService.getAll();
        }, 5000);
    }

    deleteItem(id: number) {
        for(let i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id === id) {
                this.cartItems.splice(i, 1);
                break;
            }
        }
    }
}
