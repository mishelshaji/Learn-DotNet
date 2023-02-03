import { CartComponent } from './cart/cart.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: CustomerLayoutComponent, children: [
            { path: 'cart', component: CartComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }
