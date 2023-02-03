import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    model = {
        email: '',
        password: ''
    };


    onSubmit(form:any) {
        console.log(form);
    }
}
