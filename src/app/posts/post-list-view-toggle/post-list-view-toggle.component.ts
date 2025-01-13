import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post-list-view-toggle',
  templateUrl: './post-list-view-toggle.component.html',
  styleUrl: './post-list-view-toggle.component.css'
})
export class PostListViewToggleComponent {
  @Input() selectedView = ''
  @Output() viewChanged = new EventEmitter<'grid' | 'list'>();

  setViewToList() {
    this.viewChanged.emit('list');
  }

  setViewToGrid() {
    this.viewChanged.emit('grid');
  }
}
