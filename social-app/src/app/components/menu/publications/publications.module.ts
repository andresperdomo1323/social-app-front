import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material/material.module';
import { PublicationsComponent } from './publications.component';
import { PublicationsRoutingModule } from './publications-routing.module';


@NgModule({
  declarations: [
    PublicationsComponent,
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,

  ]
})
export class PublicationsModule { }
