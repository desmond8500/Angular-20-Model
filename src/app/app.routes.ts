import { Routes } from '@angular/router';
import { IndexPage } from './pages/index-page/index-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
export const routes: Routes = [
  { path: '', component: IndexPage},
  // dashboards
  {  path: 'index', redirectTo: '', pathMatch: 'full' },
  // Settings and Profile
  { path: 'settings', loadComponent: () => import('./pages/settings-page/settings-page').then(m => m.SettingsPage) },
  { path: 'profile', loadComponent: () => import('./pages/profile-page/profile-page').then(m => m.ProfilePage) },
  // Authentication
  { path: 'login', loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register-page/register-page').then(m => m.RegisterPage) },
  { path: 'reset', loadComponent: () => import('./pages/reset-page/reset-page').then(m => m.ResetPage) },
  // Factures
  { path: 'invoices', loadComponent: () => import('./pages/erp/invoices-page/invoices-page').then(m => m.InvoicesPage) },
  // Fallback route
  { path : '**', component: NotFoundPage },
];
