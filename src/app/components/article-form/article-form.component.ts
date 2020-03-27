import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Article, ArticleFormMembers } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  formMb = ArticleFormMembers;

  articleForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.route.paramMap
      .pipe(
        switchMap(params =>
          this.articleService.getArticleById(params.get('id'))
        )
      )
      .subscribe((res: Article) => {
        const article = new Article(res);
        this.articleForm = article.buildFormGroup();
      });

    const article = new Article();
    this.articleForm = article.buildFormGroup();
  }

  ngOnInit() {}
}
