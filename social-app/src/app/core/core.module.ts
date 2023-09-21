import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    MatTabsModule
  ]
})
export class CoreModule { }
