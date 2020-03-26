import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { BaseModel } from './base.model';
import { FormInterface } from './form.interface';

export class Article extends BaseModel implements FormInterface {
  title: String;
  content: Array<any>;
  published: Boolean;
  publishedAt: Date;
  tags: Array<String>;

  constructor(data: any) {
    super(data);

    if (!data) return;

    this.title = data.title;
    this.content = data.content;
    this.published = data.published;
    this.publishedAt = data.publishedAt;
    this.tags = data.tags;
  }

  buildFormGroup(model?: Article): FormGroup {
    const tempArticle = model ? model : this;

    const articleForm = new FormGroup({
      title: new FormControl(tempArticle.title),
      content: new FormControl(tempArticle.content),
      published: new FormControl(tempArticle.published),
      publishedAt: new FormControl(tempArticle.publishedAt),
      tags: new FormArray([])
    });

    return articleForm;
  }

  trimFormGroup(formGroup: FormGroup): FormGroup {
    return formGroup;
  }
}
