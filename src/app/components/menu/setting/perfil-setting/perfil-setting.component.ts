import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil-setting',
  templateUrl: './perfil-setting.component.html',
  styleUrls: ['./perfil-setting.component.css']
})
export class PerfilSettingComponent {

  user: any = {};


  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private usersService: UsersService
  ) {

  }

  ngOnInit(): void {

  const id = localStorage.getItem('id') ?? ''; // Si getItem devuelve null, se asigna una cadena vacía
this.getUser(id);

  }

  formS = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });



  getUser(id: string): void {
    this.usersService.getUserData(id).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }





}


