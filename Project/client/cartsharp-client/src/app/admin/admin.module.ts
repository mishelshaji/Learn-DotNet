import { LoaderComponent } from './../shared/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CreateProductComponent } from './create-product/create-product.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreateCategoryComponent,
    CategoriesComponent,
    EditCategoryComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    LoaderComponent
  ],
})
export class AdminModule { }
