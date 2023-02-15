import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * This service is used to manage categories. It will be used by the components
 * to fetch the list of categories, create a new category, update an existing
 * category, and delete a category.
 */
@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    /**
     * This is the base URL of the API. It will be used to make HTTP requests.
     */
    url = 'https://localhost:7036/api/admin/categories';

    constructor(private http: HttpClient) { }

    /**
     * The getAll method will fetch the list of categories from the server.
     * @returns {Observable<CategoryViewDto[]>} Return the list of categories from the server.
     */
    getAll(){
        return this.http.get<CategoryViewDto[]>(this.url);
    }

    /**
     * Used to fetch a category by its unique identifier.
     * @param id The unique identifier of the category.
     * @returns {Observable<any>} An observable that will emit the category with the specified id.
     */
    getById(id: number) {
        return this.http.get<CategoryViewDto>(this.url + '/' + id);
    }

    /**
     * Creates a new category on the server. It will send a POST request to the
     * server with the category data in the request body.
     * @param model The category data that will be sent to the server.
     * @returns {Observable<any>} An observable that will emit the newly created category.
     */
    create(model: CategoryCreateDto) {
        return this.http.post<CategoryViewDto>(this.url, model);
    }

    /**
     * Updates an existing category on the server. It will send a PUT request to
     * the server with the category data in the request body.
     * @param id The unique identifier of the category.
     * @param model The category data that will be sent to the server.
     * @returns {Observable<any>} An observable that will emit the response from the server.
     */
    update(id: number, model: CategoryCreateDto) {
        return this.http.put(this.url + '/' + id, model);
    }
}
