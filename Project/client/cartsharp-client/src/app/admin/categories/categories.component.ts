import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    categories:any[] | null = null;

    constructor(private service: CategoryService) {

    }

    ngOnInit() {
        this.service.getAll().subscribe({
            next: (data:any) => {
                console.log(data);
                this.categories = data;
            },
            error: (err:any) => {
                console.log(err);
                alert("Loading categories failed. Please try again later.");
            }
        })
    }
}
