import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
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
  }

  cambiarFoto() {
    // Poner aca el metodo para que el usuario pueda actualizar la foto de perfil
  }
}
