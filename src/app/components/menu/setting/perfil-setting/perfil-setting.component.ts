import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil-setting',
  templateUrl: './perfil-setting.component.html',
  styleUrls: ['./perfil-setting.component.css']
})
export class PerfilSettingComponent {

  formGroup: FormGroup; // Asegúrate de que este FormGroup esté definido en tu clase


  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) {
    this.formGroup = this.formBuilder.group({
      name: '',
      lastname: '',
      email: '',
      password: '',
      username: '',
      phone: '',
      role: 'user',
      dateBirth: '',


    });
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    const userData = localStorage.getItem('user');
    let user;

    if (userData) {
      try {
        user = JSON.parse(userData);

        if (user && user.data) {
          const userDa = {
            name: user.data.name? user.data.name : '',
            lastname: user.data.lastName? user.data.lastName : '',
            email: user.data.email? user.data.email : '',
            username: user.data.username? user.data.username : '',
            password: user.data.password? user.data.password : '',
            phone: user.data.phone? user.data.phone : '',
            dateBirth: user.data.dateBirth? user.data.dateBirth : '',
          };

          console.log(userDa.name); // Verifica que los datos se están extrayendo correctamente

          this.formGroup.patchValue(userDa); // Asigna los valores al formulario
        }
      } catch (error) {
        console.error('Error al analizar los datos de usuario desde localStorage:', error);
        // Manejo de error: Puede ser útil para reiniciar o eliminar los datos incorrectos del localStorage
      }
    }

    return user; // Devolverá el objeto 'user' o 'undefined' si hay algún error o no hay datos
  }

  submitForm() {

    const userData = localStorage.getItem('user');
    const id = userData? JSON.parse(userData).data._id : '';
    this.usersService.updateUser(id,this.formGroup.value).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/menu/profile']);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    })
  }


  }



