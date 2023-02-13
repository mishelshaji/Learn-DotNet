import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    url:string = 'https://localhost:7036/api/admin/categories';
    constructor(private http: HttpClient) { }

    getAll(){
        return this.http.get(this.url);
    }

    getById(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCategory(model: any) {
        return this.http.post(this.url, model);
    }

    update(id: number, model: any) {
        return this.http.put(this.url + '/' + id, model);
    }
}
