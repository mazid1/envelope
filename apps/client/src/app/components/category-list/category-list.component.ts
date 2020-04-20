import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => (this.categories = data));
  }

  onClick(category: string) {
    this.router.navigate(['/'], { queryParams: { tags: category, fields: 'title summary tags' } });
  }
}
