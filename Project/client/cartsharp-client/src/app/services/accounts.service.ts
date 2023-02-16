import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {

    url = "https://localhost:7036/api/accounts";

    constructor(private http: HttpClient) {

    }

    login(model: LoginDto){
        return this.http.post(this.url + "/login", model);
    }

    getProfile(){
        return this.http.get(this.url + "/profile");
    }
}
