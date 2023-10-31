import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/menu/profile/profile.component';
// import { ChatComponent } from './components/menu/chat/chat.component';


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
  {
    path: 'profile',
    loadChildren: () => import('./components/menu/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'profile/:_id', component: ProfileComponent },
  // {
  //   path: 'chat',
  //   component: ChatComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
