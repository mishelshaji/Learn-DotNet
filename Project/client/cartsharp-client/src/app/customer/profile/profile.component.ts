import { AccountsService } from './../../services/accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile = {
        firstName: '',
        lastName: '',
        email: '',
    }

    constructor(private service: AccountsService) { }

    ngOnInit(): void {

        this.service.getProfile().subscribe({
            next: (response: any) => {
                this.profile.firstName = response.firstName;
                this.profile.lastName = response.lastName;
                this.profile.email = response.email;
            }
        })
    }
}
