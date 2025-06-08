import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@snovasys/timechamp-demo-header-and-sidenav';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/config',
    pathMatch: 'full'
  },
  {
    path: 'trends',
    loadComponent: () => import('./features/trends/trends.component').then(m => m.TrendsComponent)
  },
  {
    path: 'timeline',
    loadComponent: () => import('./features/timeline/timeline.component').then(m => m.TimelineComponent)
  },
  {
    path: 'config',
    loadComponent: () => import('./features/configure-apps/configure-apps.component').then(m => m.ConfigureAppsComponent),
    children: [
      {
        path: '',
        redirectTo: 'application-groups',
        pathMatch: 'full'
      },
      {
        path: 'productivity-profile',
        loadComponent: () => import('./features/configure-apps/productivity-profile/productivity-profile.component').then(m => m.ProductivityProfileComponent),
        children: [
          // Tertiary tabs - default redirect to application-groups
          {
            path: '',
            redirectTo: 'application-groups',
            pathMatch: 'full'
          },
          {
            path: 'application-groups',
            loadComponent: () => import('./features/configure-apps/productivity-profile/application-groups/application-groups.component').then(m => m.ApplicationGroupsComponent)
          },
          {
            path: 'teams',
            loadComponent: () => import('./features/configure-apps/productivity-profile/teams/teams.component').then(m => m.TeamsComponent)
          },
          {
            path: 'users',
            loadComponent: () => import('./features/configure-apps/productivity-profile/users/users.component').then(m => m.UsersComponent)
          }
        ]
      },
      {
        path: 'mapping',
        loadComponent: () => import('./features/configure-apps/mapping/mapping.component').then(m => m.MappingComponent)
      },
      {
        path: 'application-groups',
        loadComponent: () => import('./features/configure-apps/application-groups/application-groups.component').then(m => m.ApplicationGroupsComponent),
       
      }
    ]
  }
];
