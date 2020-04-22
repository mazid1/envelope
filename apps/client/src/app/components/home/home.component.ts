import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.articleService.getArticles(params).subscribe(res => {
        console.table(res);
      });
    });
  }
}
