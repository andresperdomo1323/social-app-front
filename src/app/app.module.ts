import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './core/material/material.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/login/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ProfileComponent } from './components/menu/profile/profile.component';
import { NotificationComponent } from './components/menu/notification/notification.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent,
    NotificationComponent,
    // ChatComponent,
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
    HttpClientModule,
    MatButtonToggleModule,
    HttpClientModule,
    OAuthModule.forRoot()

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
