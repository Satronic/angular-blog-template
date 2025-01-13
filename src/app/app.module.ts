import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { PostsModule } from './posts/posts.module';
import { PostDetailModule } from './post-detail/post-detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PostsModule,
    PostDetailModule, 
    ToolbarModule, 
    MenubarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
