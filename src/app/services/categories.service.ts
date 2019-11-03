import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = 'https://localhost:5001/api/Category';

  constructor(private http: HttpClient) { }

  getCategorires() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getcategory(id: number) {
    return this.http.get<Category>(this.apiUrl + '/' + id);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCategory(category: Category) {
    return this.http.post<Category>(this.apiUrl, category);
  }

  editCategory(category: Category) {
    return this.http.put<Category>(this.apiUrl + '/' + category.id, category);
  }
}
