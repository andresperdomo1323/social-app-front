import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './core/material/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/login/register/register.component';
import { LoginComponent } from './components/login/login.component';
<<<<<<< HEAD:src/app/app.module.ts
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ProfileComponent } from './components/menu/profile/profile.component';
import { ServicesModule } from './services/services.module';
=======
import { NotificationComponent } from './components/menu/notification/notification.component';
// import { ChatComponent } from './components/menu/chat/chat.component';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';



// const config: SocketIoConfig = { url: 'ws://localhost:3000', options: {} };
>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/app.module.ts


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
<<<<<<< HEAD:src/app/app.module.ts
    AdminComponent,
    ProfileComponent
=======
    NotificationComponent,
    // ChatComponent,
>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/app.module.ts
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    // SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    MatInputModule,
    MaterialModule,
    MatTabsModule,
<<<<<<< HEAD:src/app/app.module.ts
    HttpClientModule,
    ServicesModule
=======
    MatButtonToggleModule,
    HttpClientModule,
>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/app.module.ts
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
