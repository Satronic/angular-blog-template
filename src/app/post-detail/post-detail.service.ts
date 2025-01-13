import { Injectable } from '@angular/core';
import { PostDetail } from './interfaces/post-detail.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(id: number | string): Observable<PostDetail> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PostDetail>(url);
  }
}
