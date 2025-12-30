import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule, TableModule],
  templateUrl: './invoice-card.html',
  styleUrl: './invoice-card.scss',
})
export class InvoiceCard {
  facture = input<any>();
  // totalCost: number = this.facture().spents.reduce(
  //   (accumulator:any, product:any) => accumulator + product.montant,
  //   0
  // );

  ngOnInit(): void {}
}
