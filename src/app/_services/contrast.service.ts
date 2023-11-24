import { Injectable } from '@angular/core';
import { ContrastColor, ContrastColors, DefaultColors } from '../_models/contrastColor';

@Injectable({
  providedIn: 'root'
})
export class ContrastService {

  constructor() {
    var contrastColorString = localStorage.getItem('contrastColor');
    if (contrastColorString) {
      document.documentElement.style.setProperty('--contrastColor', 'yellow');
      this.setGlobalContrast(ContrastColors);
    }
  }

  setGlobalContrast(colors: ContrastColor) {
    for (const colorName in colors) {
      document.documentElement.style.setProperty(`--${colorName}`, colors[colorName]);
    }
  }

  setContrast() { 
    var contrastColorString = localStorage.getItem('contrastColor');
    if (contrastColorString) {
      document.documentElement.style.removeProperty('--contrastColor');
      this.setGlobalContrast(DefaultColors)
      localStorage.removeItem('contrastColor');      
    } else {
      document.documentElement.style.setProperty('--contrastColor', 'yellow');
      this.setGlobalContrast(ContrastColors)
      localStorage.setItem('contrastColor', JSON.stringify('contrastIsSet'));
    }
  }
}
