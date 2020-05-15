import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';
import {LangGuard} from '@shared/guards/lang-guard.service';

const routes: Routes = [
  { path: '', canActivateChild: [MetaGuard], component: WrapperComponent, children: [
      {path: 'pl', data: {lang: 'pl'}, canActivate: [LangGuard], children: [
          { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**',
            loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
            canActivate: [MetaGuard]
          },
        ]},
      {path: 'en',  data: {lang: 'en'}, canActivate: [LangGuard], children: [
          { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**',
            loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
            canActivate: [MetaGuard]
          },
        ]},
      {path: 'ua',  data: {lang: 'ua'}, canActivate: [LangGuard], children: [
          { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**',
            loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
            canActivate: [MetaGuard]
          },
        ]},
      { path: '',
        redirectTo: 'en', pathMatch: 'full'
      },
      { path: '**',
        loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
        canActivate: [MetaGuard]
      },
    ] },

];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });




