import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getArticleById(id: string): Observable<any> {
    return this.httpClient.get<Article>(`${this.apiUrl}article/${id}`);
  }
}
