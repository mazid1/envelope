import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagedResponse } from '@envelope/models';

import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: PagedResponse<Article> = new PagedResponse<Article>();

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.articleService.getArticles(params).subscribe(res => {
        this.articles = res;
      });
    });
  }
}
