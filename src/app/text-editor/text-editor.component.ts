import { Component, OnInit } from '@angular/core';

import Quill from 'quill';

import ImageResize from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  modules = {};

  constructor() {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true
    };
  }

  ngOnInit() {
  }

}
