import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from './../../services/category.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

    isUpdate = false;

    model: ProductCreateDto = {
        name: '',
        description: '',
        metaDescription: '',
        price: 0,
        stock: 0,
        categoryId: 1
    }

    categories: CategoryViewDto[] | null = null;

    productId: number | null = null;

    formData = new FormData();

    constructor(
        private productService: ProductsService,
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router) { }

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
        });


        this.productId = this.route.snapshot.params['id'];
        this.isUpdate = this.productId !== null;

        if(!this.isUpdate){
            return;
        }

        this.productService.getById(this.productId as number).subscribe({
            next: (product: ProductViewDto) => {
                this.model.name = product.name;
                this.model.description = product.description;
                this.model.metaDescription = product.metaDescription;
                this.model.categoryId = product.category?.id as number;
                this.model.price = product.price;
                this.model.stock = product.stock;
            }
        })
    }

    saveData() {
        this.formData.append("name", this.model.name);
        this.formData.append("description", this.model.description);
        this.formData.append("metaDescription", this.model.metaDescription);
        this.formData.append("price", this.model.price.toString());
        this.formData.append("stock", this.model.stock.toString());
        this.formData.append("categoryId", this.model.categoryId.toString());

        this.productService.create(this.formData).subscribe({
            next: () => {
                alert("Product created successfully");
                return this.router.navigate(['admin', 'products']);
            },
            error: (error) => {
                console.error(error);
                alert("Error creating product");
            }
        })
    }

    fileSelected(e: any) {
        const file:File = e.target.files[0];
        if (file) {
            this.formData.append("image", file, file.name);
        }
    }
}
