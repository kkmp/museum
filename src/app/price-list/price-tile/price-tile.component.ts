import { Component, Input } from '@angular/core';
import { PriceTileContent } from 'src/app/_models/priceTileContent';

@Component({
  selector: 'price-tile',
  templateUrl: './price-tile.component.html',
  styleUrls: ['./price-tile.component.css']
})
export class PriceTileComponent {
  @Input() pricetileContent!: PriceTileContent;
}
