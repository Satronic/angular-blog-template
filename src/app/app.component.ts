import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog-template';
  public items: MenuItem[] = [
    {
      label: 'Noticias',
      icon: 'pi pi-list',
      items: [
        { label: 'Ultimas noticias', icon: 'pi pi-icon' }
      ]
    },
    {
      label: 'Eventos',
      icon: 'pi pi-calendar-times',
      items: [
        { label: 'Ultimas noticias', icon: 'pi pi-icon' }
      ]
    },
    {
      label: 'Contactanos',
      icon: 'pi pi-inbox',
      items: [
        { label: 'Ultimas noticias', icon: 'pi pi-icon' }
      ]
    }
  ];
}
