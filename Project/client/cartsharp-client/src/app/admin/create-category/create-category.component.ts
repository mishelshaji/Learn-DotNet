import { CategoryService } from './../../services/category.service';
import { Component } from '@angular/core';

/**
 * This component is used to create a new category.
 */
@Component({
    selector: 'app-create-category',
    templateUrl: './create-category.component.html',
    styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

    /**
     * This is the model that will be used to create a new category.
     * It will be bound to the form fields in the UI.
     */
    model: CategoryCreateDto = {
        name: '',
        description: ''
    }

    /**
     * @param service This is the instance of CategoryService that will be used to
     * save the category to the server.
     */
    constructor(private service: CategoryService) {

    }

    /**
     * This method will be called when the user clicks on the Save button.
     * It will save the category to the server.
     */
    saveData() {
        this.service.create(this.model).subscribe({
            next: data => alert("Category saved successfully"),
            error: error => {
                alert("Saving category failed");
            }
        });
    }
}
