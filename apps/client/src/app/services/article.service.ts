import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ApiConstant } from '@envelope/constants';

import { environment } from '../../environments/environment';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  apiUrl: string = environment.apiUrl;
  articleBaseUrl = this.apiUrl + ApiConstant.articles;

  constructor(private httpClient: HttpClient) {}

  getArticles(params?: Params): Observable<Article> {
    return this.httpClient.get<Article>(`${this.articleBaseUrl}`, { params });
  }

  getArticleById(id: string): Observable<any> {
    return this.httpClient.get<Article>(`${this.articleBaseUrl}/${id}`);
  }

  saveArticle(article: any): Observable<any> {
    return this.httpClient.post<Article>(`${this.articleBaseUrl}`, article);
  }
}
