import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD:src/app/app-routing.module.ts
import { ProfileComponent } from './components/menu/profile/profile.component';
=======
import { LoginComponent } from './components/login/login.component';
// import { ChatComponent } from './components/menu/chat/chat.component';

>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/app-routing.module.ts

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
<<<<<<< HEAD:src/app/app-routing.module.ts
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/menu/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'profile/:id', component: ProfileComponent }
=======
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'chat',
  //   component: ChatComponent
  // }
>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/app-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
