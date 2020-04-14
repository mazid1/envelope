import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  content: string;
  modules = {};

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true
    };
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap(params => this.articleService.getArticleById(params.get('id'))))
      .subscribe((res: Article) => (this.content = res.content));
  }
}
