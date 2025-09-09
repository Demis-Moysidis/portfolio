import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [NgClass, TranslatePipe, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  public language = inject(LanguageService);
  private translate = inject(TranslateService);

  toggleLanguage(language: string) {
      this.language.currentLanguage = language;
      this.translate.use(language);
      document.documentElement.lang = language;
  }
}
