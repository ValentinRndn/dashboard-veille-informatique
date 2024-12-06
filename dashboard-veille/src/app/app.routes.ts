import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent) 
    },
    {
        path: 'trend',
        loadComponent: () => import('./views/trend/trend.component').then(c => c.TrendComponent)
    },
    {
        path: 'niche',
        loadComponent: () => import('./views/niche/niche.component').then(c => c.NicheComponent)
    },
    {
        path: 'information',
        loadComponent: () => import('./views/information/information.component').then(c => c.InformationComponent)

    },
    {
        path: 'social',
        loadComponent: () => import('./views/social/social.component').then(c => c.SocialComponent)
    },
    {
        path: 'domain',
        loadComponent: () => import('./views/domain/domain.component').then(c => c.DomainComponent)
    },
    {
        path: 'alert',
        loadComponent: () => import('./views/alert/alert.component').then(c => c.AlertComponent)
    },
    {
        path: 'statistic',
        loadComponent: () => import('./views/statistic/statistic.component').then(c => c.StatisticComponent)
    },
  {
    path: '**',
    redirectTo: 'home' 
  }
];