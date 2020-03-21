import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'edit-article/:id', component: TextEditorComponent },
  { path: 'edit-article', component: TextEditorComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
