import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cartItems = [];


    deleteItem(id: number) {
        console.log('Delete function was called.')
    }
}
