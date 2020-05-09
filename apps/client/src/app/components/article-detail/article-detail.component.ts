import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  content = [];
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
      .pipe(switchMap(params => this.articleService.getArticleBySlug(params.get('slug'))))
      .subscribe(({ content }: Article) => {
        const _ = content ? content : [];
        if (Array.isArray(_) && _.length > 0) {
          this.content = _[0].ops;
        }
      });
  }
}
