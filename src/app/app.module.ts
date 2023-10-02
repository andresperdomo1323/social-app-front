import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { CoreModule } from './core/core.module';
import { FormsModule,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD:src/app/app.module.ts
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { TableModule } from './modules/table/table.module';
import { UsersComponent } from './pages/users/users.component';
import { MatSortModule } from '@angular/material/sort';
=======
import { MaterialModule } from './core/material/material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/login/register/register.component'
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
>>>>>>> 51accf7f684962e3fa9822767877bfa3f8f41b1d:social-app/src/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
<<<<<<< HEAD:src/app/app.module.ts
    PublicationsComponent,
    ProfileComponent,
    SettingComponent,
    TableUsersComponent,
    UsersComponent
=======
    LoginComponent
>>>>>>> 51accf7f684962e3fa9822767877bfa3f8f41b1d:social-app/src/app/app.module.ts
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
<<<<<<< HEAD:src/app/app.module.ts
    MatTableModule,
    MatSortModule,
    TableModule,
=======
    MaterialModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,

    }
>>>>>>> 51accf7f684962e3fa9822767877bfa3f8f41b1d:social-app/src/app/app.module.ts

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
