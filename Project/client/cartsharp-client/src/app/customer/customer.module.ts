import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CartComponent } from './cart/cart.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';


@NgModule({
  declarations: [
    CartComponent,
    CustomerLayoutComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { }
