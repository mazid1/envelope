import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category.model';
import { ArticleService } from '../../services/article.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private articleService: ArticleService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => (this.categories = data));
  }

  onClick(category: string) {
    console.log(category);
    this.articleService.getArticlesByTag(category).subscribe(res => {
      console.table(res);
    });
  }
}
