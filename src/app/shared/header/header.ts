import { NgClass, NgStyle } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-header',
  imports: [NgClass, TranslatePipe, RouterModule, NgStyle],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  public language = inject(LanguageService);
  private translate = inject(TranslateService);

  @Input() headerForProjectDetail = false;

  toggleLanguage(language: string) {
      this.language.currentLanguage = language;
      this.translate.use(language);
      document.documentElement.lang = language;
  }
}
