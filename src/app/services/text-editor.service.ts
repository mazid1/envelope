import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextEditorService {

  private readonly _content: BehaviorSubject<any>; // Quill event -> ContentChange.content.ops

  constructor() {
    this._content = new BehaviorSubject([]);
  }

  set content(ops: any) {
    this._content.next(ops);
  }

  get content() {
    return this._content;
  }
}
