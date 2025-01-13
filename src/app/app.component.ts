import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog-template';
  isDarkTheme = false;

  public items: MenuItem[] = [
    {
      label: 'Noticias',
      icon: 'pi pi-list',
      items: [
        { label: 'Ultimas noticias', icon: 'pi pi-icon', routerLink: '/posts' }
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

  toggleTheme() {
    console.log('Theme: ', this.isDarkTheme)
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }



}
