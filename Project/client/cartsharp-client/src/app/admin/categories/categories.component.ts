import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

/**
 * This component is used to display the list of categories. Pagination is not
 * implemented in this example.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

    /**
     * This is the list of categories that will be displayed in the UI.
     * It will be initialized in the ngOnInit method. The default value is null.
     */
    categories:CategoryViewDto[] | null = null;


    /**
     * @param service This is the instance of CategoryService that will be used to
     */
    constructor(private service: CategoryService) {

    }

    /**
     * This method will be called when the component is initialized. It will
     * fetch the list of categories from the server. The list will be stored
     * in the categories property. If the server returns an error, an alert
     * will be displayed to the user.
     */
    ngOnInit() {
        this.service.getAll().subscribe({
            next: (data) => {
                this.categories = data;
            },
            error: () => {
                alert("Loading categories failed. Please try again later.");
            }
        })
    }
}
