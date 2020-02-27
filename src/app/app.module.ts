import { QuillModule } from 'ngx-quill';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    PostDetailComponent,
    HomeComponent,
    BlogComponent,
    AboutMeComponent,
    ContactComponent,
    PostCardComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
