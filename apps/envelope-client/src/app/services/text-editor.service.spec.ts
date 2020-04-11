import { TestBed } from '@angular/core/testing';

import { TextEditorService } from './text-editor.service';

describe('TextEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TextEditorService = TestBed.get(TextEditorService);
    expect(service).toBeTruthy();
  });
});
