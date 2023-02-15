import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    products:ProductViewDto[] = [];

    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        // this.products = this.productsService.getAll();
        console.log("Here");
    }
}
