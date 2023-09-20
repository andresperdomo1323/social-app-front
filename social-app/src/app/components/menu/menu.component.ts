import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor( private router:Router) {}

  ngOnInit(): void {
  }

  inicio(){
    this.router.navigateByUrl('/menu/publications')
  }

  perfil(){
    this.router.navigateByUrl('/menu/profile')
  }

  cerrarSesion(){
    this.router.navigateByUrl('')
  }

  editarPerfil(){
    this.router.navigateByUrl('/menu/setting')
  }
}
