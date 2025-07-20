import { Component, resource, Signal, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InvoiceCard } from '../invoice-card/invoice-card';
import { ButtonModule } from 'primeng/button';
import { InvoiceService } from '../../../services/erp/invoice-service';
import { Breadcrumbs } from '../../../src/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-invoices-page',
  imports: [CardModule, InvoiceCard, ButtonModule, Breadcrumbs],
  templateUrl: './invoices-page.html',
  styleUrl: './invoices-page.scss',
})
export class InvoicesPage {
  server = 'https://dash3.yonkou.info/api/v1';
  title = signal('')
  factures = signal<any>('');

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
  }

  getMonth(month :any, year:number){
    this.invoiceService.get_invoices(month, year).subscribe({
      next: (value) => {
        this.factures.set(value);
        this.title.set(this.months[month-1].label)
      },
      error: (err) => console.error(err),
      complete: () => console.log('DONE!'),
    });
  }

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

  date = new Date();
  activeMonth = this.date.getMonth() + 1;
}
