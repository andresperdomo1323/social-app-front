import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { AuthGoogleService } from 'src/app/services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private authGoogleService: AuthGoogleService
    ) {
      this.buildForm();
    }


  private buildForm() {
  this.form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.usersService.login(email, password).subscribe(
        (response) => {
          // Manejar la respuesta aquí y guardar en localStorage si es exitosa la autenticación
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
          // Puedes redirigir a una nueva página, mostrar un mensaje, etc.
          this.router.navigateByUrl('/menu');
        },
        (error) => {
          // Manejar errores de inicio de sesión
        }
      );


    }
  }


  loginGoogle(){
    this.authGoogleService.login();
  }


  get fc() {
    return this.form.controls;
  }

  register(){
    this.router.navigateByUrl('/register')
  }

  async signInWithGoogle() {

    (await this.authGoogleService.signInWithGoogle())
      .subscribe(
        response => {
          // Aquí puedes manejar la respuesta del backend
          console.log(response);
        },
        error => {
          // Manejar error
        }
      );

  }


}
