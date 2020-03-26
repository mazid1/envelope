import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'edit-article/:id', component: ArticleFormComponent },
  { path: 'edit-article', component: ArticleFormComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
