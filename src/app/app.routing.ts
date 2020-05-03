import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { UnAuthGuard } from '@shared/guards/un-auth.guard';
import {LangGuard} from '@shared/guards/lang-guard.service';

const routes: Routes = [
  { path: '', canActivateChild: [MetaGuard], component: WrapperComponent, children: [
      {path: 'ru', data: {lang: 'ru'}, canActivate: [LangGuard], children: [
          {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
            canLoad: [UnAuthGuard],
          },
          { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'mock',
            canActivate: [MetaGuard, AuthGuard],
            loadChildren: () => import('./mock-server-browser/mock-server-browser.module').then(m => m.MockServerBrowserModule),

          },
          { path: 'back',
            loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
            canActivate: [MetaGuard, AuthGuard],
          },
          { path: 'async',
            loadChildren: () => import('./http-async/http-async.module').then(m => m.HttpAsyncModule),
            canActivate: [MetaGuard, AuthGuard],
          },
          {
            path: 'static/back',
            loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
            canActivate: [MetaGuard],
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**',
            loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
            canActivate: [MetaGuard]
          },
        ]},
      {path: 'en',  data: {lang: 'en'}, canActivate: [LangGuard], children: [
          {
            path: 'auth',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
            canLoad: [UnAuthGuard],
          },
          { path: 'home',
            loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'mock',
            canActivate: [MetaGuard, AuthGuard],
            loadChildren: () => import('./mock-server-browser/mock-server-browser.module').then(m => m.MockServerBrowserModule),

          },
          { path: 'back',
            loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
            canActivate: [MetaGuard, AuthGuard],
          },
          { path: 'async',
            loadChildren: () => import('./http-async/http-async.module').then(m => m.HttpAsyncModule),
            canActivate: [MetaGuard, AuthGuard],
          },
          {
            path: 'static/back',
            loadChildren: () => import('./transfer-back/transfer-back.module').then(m => m.TransferBackModule),
            canActivate: [MetaGuard],
          },
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          { path: '**',
            loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
            canActivate: [MetaGuard]
          },
        ]},
      { path: '',
        redirectTo: 'ru', pathMatch: 'full'
      },
      { path: '**',
        loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule),
        canActivate: [MetaGuard]
      },
    ] },

];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });




