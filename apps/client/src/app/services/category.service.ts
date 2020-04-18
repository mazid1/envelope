import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstant } from '@envelope/constants';

import { environment } from '../../environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl: string = environment.apiUrl;
  categoryBaseUrl = `${this.apiUrl}/${ApiConstant.categories}`;

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryBaseUrl);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.categoryBaseUrl}/${id}`);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.categoryBaseUrl, category);
  }
}
