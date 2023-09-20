import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
