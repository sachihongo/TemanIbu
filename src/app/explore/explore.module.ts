import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorePage } from './explore.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import {InfoPageModule} from '../info/info.module';
import {PromoPageModule} from '../promo/promo.module';

const routes: Routes = [
  {
    path: '',
    component: ExplorePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SuperTabsModule,
    InfoPageModule,
    PromoPageModule
  ],
  entryComponents: [ExplorePage],
  declarations: [ExplorePage]
})
export class ExplorePageModule {}
