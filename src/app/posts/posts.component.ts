import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: any[] = []; 
  selectedView: 'grid' | 'list' = 'list'; // Default view is 'list'

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      }
    );    
  }

  onPostViewChanged(view: 'grid' | 'list'): void {
    console.log('Post view changed:', view); 
    this.selectedView = view;
  }
}