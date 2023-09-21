import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormsModule,
  ]
})
export class RegisterModule { }
