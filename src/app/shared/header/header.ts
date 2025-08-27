import { NgClass } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  currentLanguage = 'en';

  toggleLanguage(language: string) {
      this.currentLanguage = language;
  }
}
