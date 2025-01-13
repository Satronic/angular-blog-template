// posts.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PostListViewToggleComponent } from './post-list-view-toggle/post-list-view-toggle.component';

@NgModule({
  declarations: [PostsComponent, PostListViewToggleComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [PostsComponent],
  providers: [PostsService]
})
export class PostsModule { }

