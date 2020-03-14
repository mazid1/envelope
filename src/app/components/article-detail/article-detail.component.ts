import { Component, OnInit } from '@angular/core';
import { TextEditorService } from '../../services/text-editor.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  content = [];
  modules = {};

  constructor(private textEditorService: TextEditorService) {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true
    };
  }

  ngOnInit() {
    this.textEditorService.content.subscribe(c => {
      this.content = c;
    });
  }
}
