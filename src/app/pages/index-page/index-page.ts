import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Breadcrumbs } from '../../src/breadcrumbs/breadcrumbs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index-page',
  imports: [CardModule, Breadcrumbs, RouterModule],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {}
