import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'listpackage', loadChildren: './listpackage/listpackage.module#ListpackagePageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'detailpackage', loadChildren: './detailpackage/detailpackage.module#DetailpackagePageModule' },
  { path: 'orderpackage', loadChildren: './orderpackage/orderpackage.module#OrderpackagePageModule' },
  // { path: 'myorder', loadChildren: './myorder/myorder.module#MyorderPageModule' },
  // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  // { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'soonmom', loadChildren: './soonmom/soonmom.module#SoonmomPageModule' },
  { path: 'soonkids', loadChildren: './soonkids/soonkids.module#SoonkidsPageModule' },
  // { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  // { path: 'promo', loadChildren: './promo/promo.module#PromoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
