import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { LegalNotice } from './legal-notice/legal-notice';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { ProjectDetail } from './project-detail/project-detail';

export const routes: Routes = [
    {path: '', component: MainPage},
    {path: 'legal-notice', component: LegalNotice},
    {path: 'privacy-policy', component: PrivacyPolicy},
    {path: 'project/:id', component: ProjectDetail}
];
