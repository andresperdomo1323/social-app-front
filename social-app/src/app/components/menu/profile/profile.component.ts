import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent {
  userProfile = {
    profilePictureUrl: 'url_de_la_foto_de_perfil.jpg',
    username: 'Nombre de usuario',
    name: 'Nombre',
    email: 'correo@email.com',
    interests: 'Descripción de intereses'
  };
}
