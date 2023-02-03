import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private products = [
        {id: 1, name: 'Product 1', description: 'This is a product', category: 'General', price: 100},
        {id: 2, name: 'Product 2', description: 'This is a product', category: 'General', price: 100},
        {id: 3, name: 'Product 3', description: 'This is a product', category: 'General', price: 100},
        {id: 4, name: 'Product 4', description: 'This is a product', category: 'General', price: 100},
        {id: 5, name: 'Product 5', description: 'This is a product', category: 'General', price: 100},
        {id: 6, name: 'Product 6', description: 'This is a product', category: 'General', price: 100},
        {id: 7, name: 'Product 7', description: 'This is a product', category: 'General', price: 100},
        {id: 8, name: 'Product 8', description: 'This is a product', category: 'General', price: 100},
        {id: 9, name: 'Product 9', description: 'This is a product', category: 'General', price: 100},
        {id: 10, name: 'Product 10', description: 'This is a product', category: 'General', price: 100},
    ];

    constructor() { }

    getAll(){
        return this.products;
    }
}
