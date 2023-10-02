import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD:src/app/app-routing.module.ts
import { RegisterComponent } from './components/register/register.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { UsersComponent } from './pages/users/users.component';
=======

>>>>>>> 51accf7f684962e3fa9822767877bfa3f8f41b1d:social-app/src/app/app-routing.module.ts

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then(m => m.MenuModule)
  },
<<<<<<< HEAD:src/app/app-routing.module.ts
  {
    path: 'admin',
    component: UsersComponent
  },
=======

>>>>>>> 51accf7f684962e3fa9822767877bfa3f8f41b1d:social-app/src/app/app-routing.module.ts

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
