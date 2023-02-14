import { CategoryService } from './../../services/category.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
    model: ProductCreateDto = {
        name: '',
        description: '',
        metaDescription: '',
        price: 0,
        stock: '',
        categoryId: 0
    }

    categories: CategoryViewDto[] | null = null;

    constructor(
        private productService: ProductsService,
        private categoryService: CategoryService) { }

    /**
     * Fetches all categories from the server and stores them in the categories
     * property. If an error occurs, an alert is shown.
     */
    ngOnInit(): void {
        this.categoryService.getAll().subscribe({
            next: (categories) => {
                this.categories = categories;
            },
            error: (error) => {
                console.error(error);
                alert("Error loading categories");
            }
        })
    }

    saveData() {
        this.productService.create(this.model).subscribe({
            next: () => {
                alert("Product created successfully");
            },
            error: (error) => {
                console.error(error);
                alert("Error creating product");
            }
        })
    }
}
