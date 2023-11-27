import { Component, OnInit } from '@angular/core';
import { FontService } from '../_services/font.service';
import { FontSize } from '../_models/fontSize';
import { ContrastService } from '../_services/contrast.service';
import { ExhibitionsDataService } from '../_services/exhibitions-data.service';
import { TileContent } from '../_models/tileContent';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  fontSizeEnum = FontSize;
  exhibitions: TileContent[] = [];

  constructor(public fontService: FontService, public contrastService: ContrastService, private exhibitionService: ExhibitionsDataService) {}

  ngOnInit(): void {
    this.exhibitions = this.exhibitionService.exhibitions;
  }
}