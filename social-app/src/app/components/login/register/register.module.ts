import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { HttpClientModule } from '@angular/common/http';


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
    FormlyModule,
    FormsModule,
    HttpClientModule
  ]
})
export class RegisterModule { }
