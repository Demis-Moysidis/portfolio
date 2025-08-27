import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [NgClass, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  currentLanguage = 'en';

  private translate = inject(TranslateService);

  toggleLanguage(language: string) {
      this.currentLanguage = language;
      this.translate.use(language);
  }
}
