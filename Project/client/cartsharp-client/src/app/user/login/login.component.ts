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

    constructor(private service: AccountsService) { }

    onSubmit() {
        this.service.login(this.model).subscribe({
            next: (result: any)=>{
                console.log(result.result);
            },
            error: (err) => {
                console.error(err);
            }
        })
    }
}
