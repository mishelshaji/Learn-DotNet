import { Component, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    products:any[] = [];

    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        this.products = this.productsService.getAll();
    }
}
