import { Component, resource } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InvoiceCard } from '../invoice-card/invoice-card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-invoices-page',
  imports: [CardModule, InvoiceCard, ButtonModule],
  templateUrl: './invoices-page.html',
  styleUrl: './invoices-page.scss',
})
export class InvoicesPage {
  server = 'https://dash3.yonkou.info/api/v1';
  factures = resource({
    loader: () =>
      fetch(this.server + '/factures').then((response) => response.json()),
  });

  months = [
    { label: 'Janvier', value: 1 },
    { label: 'Février', value: 2 },
    { label: 'Mars', value: 3 },
    { label: 'Avril', value: 4 },
    { label: 'Mai', value: 5 },
    { label: 'Juin', value: 6 },
    { label: 'Juillet', value: 7 },
    { label: 'Août', value: 8 },
    { label: 'Septembre', value: 9 },
    { label: 'Octobre', value: 10 },
    { label: 'Novembre', value: 11 },
    { label: 'Décembre', value: 12 },
  ];
}
