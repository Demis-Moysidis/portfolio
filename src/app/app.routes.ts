import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './legal-notice/legal-notice';

export const routes: Routes = [
    {path: '', component: MainPage},
    {path: 'legal-notice', component: LegalNotice}
];
