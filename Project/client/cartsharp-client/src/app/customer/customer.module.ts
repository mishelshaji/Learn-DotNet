import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    CustomerLayoutComponent,
    CartItemComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { }
