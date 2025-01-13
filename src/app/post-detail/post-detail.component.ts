// Suggested code may be subject to a license. Learn more: ~LicenseLog:645308702.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2766299809.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4079014115.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2203686825.
// typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetail } from './interfaces/post-detail.interface';
import { PostDetailService } from './post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: PostDetail = {
    id: 0,
    title: '',
    body: '',
    author: '',
    date: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postDetailService: PostDetailService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postDetailService.getPost(`${id}`)
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    window.history.back();
  }
}
