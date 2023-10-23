import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  user = {
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    birthdate: '',
    phone: ''
  };

  cambiarFoto() {
    // Poner aca el metodo para que el usuario pueda actualizar la foto de perfil
  }
}