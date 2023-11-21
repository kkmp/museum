import { Component } from '@angular/core';
import { PriceTileContent } from '../_models/priceTileContent';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent {
  prices: PriceTileContent[] = [
    {
      name: 'Bilet normalny',
      price: '40',
      extras: []
    },
    {
      name: 'Bilet ulgowy',
      price: '25',
      extras: ['Młodzież szkolna', 'Emeryci', 'Studenci do 26. roku życia']
    },
    {
      name: 'Bilet grupowy',
      price: '25',
      extras: ['Minimum 10 osób']
    },
    {
      name: 'Bilet rodzinny',
      price: '60',
      extras: ['2 osoby dorosłe + dzieci do 18. roku życia', 'Maksymalnie 6 osób']
    },
  ];
}
