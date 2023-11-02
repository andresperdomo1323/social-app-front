import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.models';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData = [];
  public id = this.getId();
  public token = this.getToken();
  public user = this.getUser();


  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,


  ) {
   }

  ngOnInit(){
    this.displayDataDetails();
  }

  getToken(){
    return localStorage.getItem('token');

  }

  getId(){
    return localStorage.getItem('id');
  }

  getUser() {
    const userData = localStorage.getItem('user');
    let user;

    if (userData) {
      try {
        user = JSON.parse(userData);
      } catch (error) {
        console.error('Error al analizar los datos de usuario desde localStorage:', error);
        // Manejo de error: Puede ser útil para reiniciar o eliminar los datos incorrectos del localStorage
      }
    }

    return user; // Devolverá el objeto 'user' o 'undefined' si hay algún error o no hay datos en localStorage
  }

  displayDataDetails() {
    this.user.data
    const data = localStorage.getItem('user');

    if (data) {
      try {
        this.user = JSON.parse(data);
      } catch (error) {
        console.error('Error al analizar los datos de usuario desde localStorage:', error);
        // Manejo de error: Puede ser útil para reiniciar o eliminar los datos incorrectos del localStorage
      }
    }

   const userData = this.user.data;

   const u = [
      {
        name: userData.name,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        avatar: userData.avatar || 'https://www.delacabeza-rivera.es/wp-content/uploads/2020/06/PERFIL-VACIO.png',
        _id: userData._id,
      },

   ]

   return u;


  }
}
