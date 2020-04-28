import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  pagedArticles: PagedResponse<Article> = new PagedResponse<Article>();
  queryParams: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.articleService.getArticles(params).subscribe(res => {
        this.pagedArticles = res;
        this.queryParams = params;
        this.paginator.pageSize = res.pageSize;
        this.paginator.pageIndex = res.pageIndex;
      });
    });
  }

  onPageEvent(event: PageEvent) {
    const page = event.pageIndex;
    const limit = event.pageSize;

    this.articleService.getArticles({ ...this.queryParams, page, limit }).subscribe(res => {
      this.pagedArticles = res;
      this.paginator.pageSize = res.pageSize;
      this.paginator.pageIndex = res.pageIndex;
    });
  }
}
