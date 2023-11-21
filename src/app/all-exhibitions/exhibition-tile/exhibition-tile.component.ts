import { Component, Input } from '@angular/core';
import { TileContent as TileContent } from 'src/app/_models/tileContent';

@Component({
  selector: 'exhibition-tile',
  templateUrl: './exhibition-tile.component.html',
  styleUrls: ['./exhibition-tile.component.css']
})
export class ExhibitionTileComponent {
  @Input() tileContent!: TileContent;
}
