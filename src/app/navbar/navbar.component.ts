import { Component } from '@angular/core';
import { FontService } from '../_services/font.service';
import { FontSize } from '../_models/fontSize';
import { ContrastService } from '../_services/contrast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  fontSizeEnum = FontSize;

  constructor(public fontService: FontService, public contrastService: ContrastService) {}
}