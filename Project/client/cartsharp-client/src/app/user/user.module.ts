import { ProductCardComponent } from './../shared/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ProductCardComponent
  ]
})
export class UserModule { }
