import { Component, OnInit } from '@angular/core';
import { TileContent } from '../_models/tileContent';
import { ExhibitionsDataService } from '../_services/exhibitions-data.service';

@Component({
  selector: 'app-all-exhibitions',
  templateUrl: './all-exhibitions.component.html',
  styleUrls: ['./all-exhibitions.component.css']
})
export class AllExhibitionsComponent implements OnInit {
  exhibitions: TileContent[] = [];

  constructor(private exhibitionsData: ExhibitionsDataService) {}

  ngOnInit(): void {
    this.exhibitions = this.exhibitionsData.exhibitions
  }
}
