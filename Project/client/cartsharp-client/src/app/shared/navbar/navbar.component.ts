import { TokenHelper } from './../../../utilities/helpers/tokenHelper';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    token: any = {};

    isAuthenticated = false;

    constructor(private tokenHelper: TokenHelper) {
        this.token = tokenHelper.getDecodedToken();
        this.isAuthenticated = tokenHelper.hasToken();
    }
}
