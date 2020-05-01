import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { BaseModel } from './base.model';
import { FormInterface } from './form.interface';

export class Article extends BaseModel implements FormInterface {
  title: string;
  slug: string;
  content: [];
  summary: string;
  published: boolean;
  publishedAt: Date;
  tags: Array<string>;

  constructor(data?: any) {
    super(data);

    if (!data) {
      return;
    }

    this.title = data.title;
    this.slug = data.slug;
    this.content = data.content;
    this.summary = data.summary;
    this.published = data.published;
    this.publishedAt = data.publishedAt;
    this.tags = data.tags;
  }

  buildFormGroup(model?: Article): FormGroup {
    const tempArticle = model ? model : this;

    const articleForm = new FormGroup({
      title: new FormControl(tempArticle.title),
      content: new FormControl(tempArticle.content),
      summary: new FormControl(tempArticle.summary),
      published: new FormControl(tempArticle.published ? tempArticle.published : false),
      publishedAt: new FormControl(tempArticle.publishedAt),
      tags: new FormControl(tempArticle.tags)
    });

    return articleForm;
  }

  trimFormGroup(formGroup: FormGroup): FormGroup {
    return formGroup;
  }
}

export enum ArticleFormMembers {
  TITLE = 'title',
  CONTENT = 'content',
  SUMMARY = 'summary',
  PUBLISHED = 'published',
  PUBLISHED_AT = 'publishedAt',
  TAGS = 'tags'
}
