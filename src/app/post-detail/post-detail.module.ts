// Suggested code may be subject to a license. Learn more: ~LicenseLog:3243369287.
// typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailService } from './post-detail.service';

const routes: Routes = [
  {
    path: ':id',
    component: PostDetailComponent
  }
];

@NgModule({
  declarations: [
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PostDetailService]
})
export class PostDetailModule { }
