import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    cartItems = [
        {
            id: 1,
            product: {
                id: 10,
                name: 'Product 1',
                price: 100,
                description: 'Description for Product 1',
            },
            quantity: 4,
            userId: 1
        },
        {
            id: 2,
            product: {
                id: 11,
                name: 'Product 2',
                price: 300,
                description: 'Description for Product 2',
            },
            quantity: 1,
            userId: 1
        }
    ]

    constructor() { }

    getAll() {
        return this.cartItems;
    }
}
