import { CategoryService } from './../../services/category.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
    model = {
        name: '',
        description: ''
    }

    constructor(private service:CategoryService) {

    }

    saveData() {
        console.log(this.model);
        this.service.createCategory(this.model).subscribe({
            next: data=>console.log(data),
            error: error=>{
                console.log(error);
                alert("Saving category failed");
            }
        })
    }
}
