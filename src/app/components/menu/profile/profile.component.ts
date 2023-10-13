import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/models/user.models';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  arrUser = signal([]);

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {

   }

  ngOnInit(){
    this.activatedRoute.params.subscribe(params =>{
      const user = this.usersService.getById(params['_id']);
      console.log(user);
    })

  }


  userProfile = {
    profilePictureUrl: 'url_de_la_foto_de_perfil.jpg',
    username: 'Nombre de usuario',
    name: 'Nombre',
    email: 'correo@email.com',
    interests: 'Descripción de intereses'
  };
}
