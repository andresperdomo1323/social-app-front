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

  }
}
