import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    products: ProductViewDto[] | null = null;

    constructor(private service: ProductsService) {

    }

    ngOnInit(): void {
        this.service.getAll().subscribe({
            next: (products) => {
                this.products = products;
            },
            error: (err) => {
                console.error(err);
                this.products = [];
            }
        })
    }

    delete(id: number) {
        const option = confirm(`Are you sure you want to delete this product with id${id}?`);
        if (option == true) {
            alert('Product cannot be deleted.');
        }
    }

}
