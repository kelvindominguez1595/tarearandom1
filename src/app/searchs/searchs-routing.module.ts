import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchsPage } from './searchs.page';

const routes: Routes = [
  {
    path: '',
    component: SearchsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchsPageRoutingModule {}
