import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, Menubar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Réglages',
        icon: 'pi pi-star',
        routerLink: '/settings',
      },
      {
        label: 'Profil',
        icon: 'pi pi-user',
        routerLink: '/profile',
      },

    ];
  }
}
