import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
    id: number | null = null
    model = {
        name: '',
        description: ''
    }

    constructor(private service:CategoryService,
        private route: ActivatedRoute,
        private router:Router) {
        this.id = route.snapshot.params['id'];
    }

    ngOnInit() {
        if(this.id == null) {
            return;
        }
        this.service.getById(this.id).subscribe({
            next: (result: any) => {
                this.model = result;
            },
            error: (err: any) => {
                if(err.status == 404)
                {
                    this.router.navigate(['/not-found']);
                    return;
                }
                console.log(err);
                alert('Unable to fetch data.');
            }
        })
    }

    saveData() {
        this.service.update(this.id as number, this.model).subscribe({
            next: (result: any) => {
                alert('Category updated successfully.');
            },
            error: (err: any) => {
                console.log(err);
                alert('Unable to update category.');
            }
        });
    }
}
