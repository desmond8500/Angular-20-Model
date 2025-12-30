import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Menubar } from 'primeng/menubar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar1',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    Ripple,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './navbar1.html',
  styleUrl: './navbar1.scss',
})
export class Navbar1 {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url:'/',
      },
      {
        label: 'Pages',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Profile',
            routerLink: '/profile',
            icon: 'pi pi-user',
            url: '/profile',
          },
          {
            label: 'Settings',
            routerLink: '/settings',
            icon: 'pi pi-server',
            url: '/settings',
          },
          {
            separator: true,
          },
          {
            label: 'Not Found',
            icon: 'pi pi-pencil',
            url: '/not-found',
          },
        ],
      },
    ];
  }
}
