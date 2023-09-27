import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { CoreModule } from './core/core.module';
import { FormsModule,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingComponent } from './components/setting/setting.component';
import { TableUsersComponent } from './components/table-users/table-users.component';
import { TableModule } from './modules/table/table.module';
import { UsersComponent } from './pages/users/users.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PublicationsComponent,
    ProfileComponent,
    SettingComponent,
    TableUsersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    TableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
