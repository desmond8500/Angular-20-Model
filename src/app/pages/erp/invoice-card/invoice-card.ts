import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule],
  templateUrl: './invoice-card.html',
  styleUrl: './invoice-card.scss'
})
export class InvoiceCard {
  facture = input<any>()

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('Facture:', this.facture());

  }
}
