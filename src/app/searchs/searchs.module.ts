import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchsPageRoutingModule } from './searchs-routing.module';

import { SearchsPage } from './searchs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchsPageRoutingModule
  ],
  declarations: [SearchsPage]
})
export class SearchsPageModule {}
