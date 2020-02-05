import { Component, OnInit } from '@angular/core';
import { TextEditorService } from '../services/text-editor.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  content = [];

  constructor(private textEditorService: TextEditorService) {
  }

  ngOnInit() {
    this.textEditorService.content.subscribe(c => {
      this.content = c;
    });
  }

}
