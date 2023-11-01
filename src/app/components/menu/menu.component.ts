import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth-google.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  chatOpen: boolean = true;
  // variable de año en curso
  year: any;
  today = new Date();
  public user = this.getUser();

  constructor(private router: Router,
    private authGoogleService: AuthGoogleService) { }

  ngOnInit(): void {
    this.year = this.today.getFullYear();
  }

  // Rutas configuraciones
  inicio() {
    this.router.navigateByUrl('/menu/publications');
  }

  perfil() {
    this.router.navigateByUrl('/menu/profile');
  }

  editarPerfil() {
    this.router.navigateByUrl('/menu/setting/0');
  }

  publicaciones() {
    this.router.navigateByUrl(`/menu/setting/1`);
  }

  configuracionPrivacidad() {
    this.router.navigateByUrl(`/menu/setting/2`);
  }

  ayudaySoporte() {
    this.router.navigateByUrl(`/menu/setting/3`);
  }

  cerrarSesion() {
    this.router.navigateByUrl('');
  }

  logout() {
    this.authGoogleService.logout();
    this.router.navigateByUrl('/');
  }

  minimizeChat() {
    // Función para minimizar el chat
    this.chatOpen = false;
  }

  closeChat() {
    // Función para cerrar el chat
    this.chatOpen = false;
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
}


