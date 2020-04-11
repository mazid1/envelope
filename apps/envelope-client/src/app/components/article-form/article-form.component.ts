import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  id: string;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    const article = new Article();
    this.articleForm = article.buildFormGroup();

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe((res: Article) => {
        const article = new Article(res);
        this.articleForm = article.buildFormGroup();
      });
    }
  }

  ngOnInit() {}

  // get published() {
  //   return this.articleForm.get('published');
  // }
}
