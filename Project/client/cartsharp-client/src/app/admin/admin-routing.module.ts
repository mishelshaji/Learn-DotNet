import { CreateProductComponent } from './create-product/create-product.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: 'categories', component: CategoriesComponent },
            { path: 'categories/create', component: CreateCategoryComponent },
            { path: 'categories/edit/:id', component: EditCategoryComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'products/create', component: CreateProductComponent },
            { path: 'products/edit/:id', component: CreateProductComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
