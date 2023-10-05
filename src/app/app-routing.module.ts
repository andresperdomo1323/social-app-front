import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
