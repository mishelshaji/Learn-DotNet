import { TokenHelper } from './../../../utilities/helpers/tokenHelper';
import { Router } from '@angular/router';
import { AccountsService } from './../../services/accounts.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    model: LoginDto = {
        email: '',
        password: ''
    }

    errors : any;

    constructor(
        private service: AccountsService,
        private router: Router,
        private tokenHelper: TokenHelper) { }

    onSubmit() {
        this.service.login(this.model).subscribe({
            next: (response: any) => {
                this.tokenHelper.setToken(response.result);
                this.router.navigateByUrl('/customer/profile');
            },
            error: (error: any) => {
                // {
                //     Email: ['The Email field is required.'],
                // }
                this.errors = error.error;
            }
        })
    }
}
