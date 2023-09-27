import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';



const routes: Routes = [
  {
    path: 'publications',
    component: MenuComponent,
    loadChildren: () => import('./publications/publications.module').then(m => m.PublicationsModule)
  },
  {
    path: 'profile',
    component: MenuComponent,
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)

  },
  {
    path: 'setting/:type',
    component: MenuComponent,
    loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
  },

  {
    path: '**',
    redirectTo: 'publications'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
