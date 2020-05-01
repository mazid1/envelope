import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { take, takeUntil } from 'rxjs/operators';

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';

import { Article, ArticleFormMembers } from '../../models/article.model';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit, AfterViewInit, OnDestroy {
  formMb = ArticleFormMembers;
  articleForm: FormGroup;

  slug: string;

  protected tags = [
    'angular',
    'javascript',
    'nodejs',
    'reactjs',
    'typescript',
    'aws',
    'gcp',
    'spring-boot',
    'java'
  ];

  /** control for the MatSelect filter keyword multi-selection */
  public tagFilterCtrl: FormControl = new FormControl();

  /** list of tags filtered by search keyword */
  public filteredTags = new ReplaySubject<any[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    let article = new Article();
    this.articleForm = article.buildFormGroup();

    this.slug = this.route.snapshot.params.slug;
    if (this.slug) {
      this.articleService.getArticleBySlug(this.slug).subscribe((res: Article) => {
        article = new Article(res);
        this.articleForm = article.buildFormGroup();
      });
    }
  }

  ngOnInit() {
    // load the initial tag list
    this.filteredTags.next(this.tags.slice());

    // listen for search field value changes
    this.tagFilterCtrl.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this.filterTagsMulti();
    });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
    console.log(this.articleForm);
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue() {
    this.filteredTags.pipe(take(1), takeUntil(this._onDestroy)).subscribe(() => {
      // setting the compareWith property to a comparison function
      // triggers initializing the selection according to the initial value of
      // the form control (i.e. _initializeSelection())
      // this needs to be done after the filteredBanks are loaded initially
      // and after the mat-option elements are available
      this.multiSelect.compareWith = (a: string, b: string) => a && b && a === b;
    });
  }

  protected filterTagsMulti() {
    if (!this.tags) {
      return;
    }
    // get the search keyword
    let search = this.tagFilterCtrl.value;
    if (!search) {
      this.filteredTags.next(this.tags.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the tags
    this.filteredTags.next(this.tags.filter(tag => tag.toLowerCase().indexOf(search) > -1));
  }

  save() {
    // this.articleForm.controls[this.formMb.CONTENT].setValue = this.textEditorService.content;
    console.log(this.articleForm.value);
    this.articleService.saveArticle(this.articleForm.value).subscribe(res => {
      console.log(res);
    });
  }
}
