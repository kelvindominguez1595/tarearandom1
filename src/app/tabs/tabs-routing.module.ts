import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'components',
        loadChildren: () => import('../components/components.module').then( m => m.ComponentsPageModule)
      },
      {
        path: 'searchs',
        loadChildren: () => import('../searchs/searchs.module').then( m => m.SearchsPageModule)
      },
      {
        path: 'details',
        loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
