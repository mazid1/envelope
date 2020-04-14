import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, take, takeUntil } from 'rxjs/operators';

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

  id: string;
  // tagFilterCtrl = new FormControl('');

  /** list of banks */
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

  /** control for the selected bank for multi-selection */
  // public bankMultiCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public tagFilterCtrl: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredTags = new ReplaySubject<any[]>(1);

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
    let article = new Article();
    this.articleForm = article.buildFormGroup();

    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe((res: Article) => {
        article = new Article(res);
        this.articleForm = article.buildFormGroup();
      });
    }
  }

  ngOnInit() {
    // set initial selection
    this.articleForm.get(this.formMb.TAGS).setValue([this.tags[2], this.tags[5]]);

    // load the initial bank list
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
    // filter the banks
    this.filteredTags.next(this.tags.filter(tag => tag.toLowerCase().indexOf(search) > -1));
  }
  // get published() {
  //   return this.articleForm.get('published');
  // }
}
