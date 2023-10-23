import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingRoutingModule } from './setting-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreModule } from 'src/app/core/core.module';
import { SettingComponent } from './setting.component';
import { PerfilSettingComponent } from './perfil-setting/perfil-setting.component';
import { PublicacionesGuardadasSettingComponent } from './publicaciones-guardadas-setting/publicaciones-guardadas-setting.component';
import { ConfiguracionSettingComponent } from './configuracion-setting/configuracion-setting.component';
import { AyudaysoporteSettingComponent } from './ayudaysoporte-setting/ayudaysoporte-setting.component';



@NgModule({
  declarations: [
    SettingComponent,
    PerfilSettingComponent,
    PublicacionesGuardadasSettingComponent,
    ConfiguracionSettingComponent,
    AyudaysoporteSettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTabsModule,
    CoreModule
  ]
})
export class SettingModule { }
