import { Component, OnInit } from '@angular/core';

import Quill from 'quill';

import ImageResize from 'quill-image-resize-module';
import { TextEditorService } from '../services/text-editor.service';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  modules = {};
  content = [];

  constructor(private textEditorService: TextEditorService) {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true
    };
  }

  ngOnInit() {
  }

  onContentChanged(event) {
    if (event.hasOwnProperty('content') && event.content.hasOwnProperty('ops')) {
      this.content = event.content.ops;
    }
  }

  save() {
    this.textEditorService.content = this.content;
  }
}
