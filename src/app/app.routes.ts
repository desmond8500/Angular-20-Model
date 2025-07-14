import { Routes } from '@angular/router';
import { IndexPage } from './pages/index-page/index-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { SettingsPage } from './pages/settings-page/settings-page';
import { ProfilePage } from './pages/profile-page/profile-page';

export const routes: Routes = [
  { path: '', component: IndexPage},
  {  path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'settings', component: SettingsPage },
  { path: 'profile', component: ProfilePage},
  { path : '**', component: NotFoundPage } // Fallback route
];
