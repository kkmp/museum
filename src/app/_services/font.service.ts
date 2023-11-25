import { Injectable } from '@angular/core';
import { FontSize } from '../_models/fontSize';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  constructor() {
    var fontSizeString = localStorage.getItem('fontSize');
    if (!fontSizeString) {
      this.setGlobalFontSize(FontSize.Default)
    } else {
      document.documentElement.style.setProperty('--fontSize', JSON.parse(fontSizeString))
    }
  }

  setGlobalFontSize(size: FontSize) {
    localStorage.setItem('fontSize', JSON.stringify(size));
    document.documentElement.style.setProperty('--fontSize', size);
  }
}
