import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD:src/app/components/login/register/register.module.ts
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';
=======

>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/components/login/register/register.module.ts


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
