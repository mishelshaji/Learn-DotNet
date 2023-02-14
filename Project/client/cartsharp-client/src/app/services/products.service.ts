import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    url: string = "https://localhost:7036/api/admin/products";

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<ProductViewDto[]>(this.url);
    }

    create(product: ProductCreateDto) {
        return this.http.post<ProductViewDto>(this.url, product);
    }

    update(id: number, product: ProductCreateDto) {
        return this.http.put<ProductViewDto>(`${this.url}/${id}`, product);
    }

    delete(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}
