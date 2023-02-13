import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateCategoryComponent,
    CategoriesComponent,
    EditCategoryComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
})
export class AdminModule { }
