import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'android',
    loadComponent: () =>
      import('./android/android.component').then((c) => c.AndroidComponent),
  },
  {
    path: 'ios',
    loadComponent: () =>
      import('./ios/ios.component').then((c) => c.IosComponent),
  },
];
