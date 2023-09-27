import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  // variable de año en curso
  year: any;
  today = new Date();

  constructor( private router:Router) {}

  ngOnInit(): void {
    this.year = this.today.getFullYear();
  }

  //Rutas configuraciones
  inicio(){
    this.router.navigateByUrl('/menu/publications')
    setTimeout(() => {
      window.location.reload()
    }, 150);
  }

  perfil(){
    this.router.navigateByUrl('/menu/profile')
  }

  editarPerfil(){
    this.router.navigateByUrl('/menu/setting/0')
    setTimeout(() => {
      window.location.reload()
    }, 150);
  }

  publicaciones(){
    this.router.navigateByUrl(`/menu/setting/1`)
    setTimeout(() => {
      window.location.reload()
    }, 150);
  }

  configuracionPrivacidad(){
    this.router.navigateByUrl(`/menu/setting/2`)
    setTimeout(() => {
      window.location.reload()
    }, 150);
  }

  ayudaySoporte(){
    this.router.navigateByUrl(`/menu/setting/3`)
    setTimeout(() => {
      window.location.reload()
    }, 150);
  }

  cerrarSesion(){
    this.router.navigateByUrl('')
  }

}
