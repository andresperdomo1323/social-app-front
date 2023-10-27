import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../../models/user.models';
import { Router } from '@angular/router';
import { of, timer } from 'rxjs'; // Importa 'of' y 'timer' de 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'; // Importa 'catchError', 'map' y 'switchMap' de 'rxjs/operators'
import { validateUsername } from 'src/app/validators/validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  showEmailError: boolean = false;
  userForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.buildForm();
  }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      return { emailInvalid: true };
    }
    return null;
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    this.submitted = true;
    event.preventDefault();
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.usersService.createUser(user)
        .subscribe((newUser: User) => {
          console.log(newUser);
          this.router.navigate(['./login']);
        });
    }

    this.userForm.reset();
  }

  emailAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && control.value.trim() !== '') {
        return this.usersService.checkEmailExists(control.value).pipe(
          map((response) => {
            if (response.message === 'El correo electrónico ya está registrado') {
              return { emailExists: true };
            } else {
              return null;
            }
          }),
          catchError(() => of(null))
        );
      } else {
        return of(null);
      }
    };
}

private buildForm() {
  this.userForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.email],
      [this.emailAsyncValidator()],
    ],
    username: [
      '',
      [Validators.required],
      [validateUsername(this.usersService)],
    ],
    password: ['', [Validators.required]],
    role: ['user', [Validators.required]],
  });

  // Agrega una validación personalizada para el correo electrónico existente
  this.userForm.get('email')?.setAsyncValidators(this.emailAsyncValidator());

  // Agrega una validación personalizada para el correo electrónico no existente
  this.userForm.get('email')?.setAsyncValidators(this.emailNotExistAsyncValidator());
}

emailNotExistAsyncValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (control.value && control.value.trim() !== '') {
      return timer(300).pipe(
        switchMap(() => {
          return this.usersService.checkEmailExists(control.value).pipe(
            map((response) => {
              if (response.message === 'El correo electrónico ya está registrado') {
                return { emailExists: true };
              } else {
                return null;
              }
            }),
            catchError(() => of(null))
          );
        })
      );
    } else {
      return of(null);
    }
  };
}
}