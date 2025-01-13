import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(posts => posts.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body // Assuming 'body' field contains the description in the API response
      })))
    );
  }
}