import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';

import {
    Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { TextEditorService } from '../../services/text-editor.service';

Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @Input() editorFormControl: FormControl;

  modules = {};

  constructor() {
    this.modules = {
      formula: true,
      imageResize: {},
      syntax: true
    };
    if (!this.editorFormControl) {
      this.editorFormControl = new FormControl();
    }
  }

  ngOnInit() {}
}
