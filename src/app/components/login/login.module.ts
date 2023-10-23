import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SignInGoogleComponent } from './sign-in-google/sign-in-google.component';

@NgModule({
  declarations: [
    SignInGoogleComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class LoginModule { }
