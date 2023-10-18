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
import { NotificationComponent } from './components/menu/notification/notification.component';
import { ChatComponent } from './components/menu/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { SocketService } from './services/socket.service';



// const config: SocketIoConfig = { url: 'ws://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
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
    MatButtonToggleModule,
    HttpClientModule,
  ],
  providers: [
    // SocketService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
