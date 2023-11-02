import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-setting',
  templateUrl: './perfil-setting.component.html',
  styleUrls: ['./perfil-setting.component.css']
})
export class PerfilSettingComponent {
  formS = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });
  constructor(private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');

    if (userData) {
      const userDataObj = JSON.parse(userData);

      // Llena el formulario con los datos del usuario almacenados en el Local Storage
      this.formS.setValue({
        email: userDataObj.email,
        password: '', // Aquí puedes dejarlo en blanco si no deseas mostrar la contraseña
        name: userDataObj.name,
        lastname: userDataObj.lastName,
        username: userDataObj.username,
        birthdate: '', // Asegúrate de que tengas un campo para la fecha de nacimiento en tu formulario
        phone: '' // Asegúrate de que tengas un campo para el teléfono en tu formulario
      });
    }
  }
}
