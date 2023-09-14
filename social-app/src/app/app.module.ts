import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { BtnComponent } from './components/btn/btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideErrorTailorConfig } from '@ngneat/error-tailor';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
