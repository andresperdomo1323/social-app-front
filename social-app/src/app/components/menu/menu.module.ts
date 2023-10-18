import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule,
    MatTabsModule,
  ]
})
export class MenuModule { }
