import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn  } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../../models/user.models';
import { Router } from '@angular/router';
import { async, map, tap } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  userForm: FormGroup = new FormGroup({});
  successMessage: string = '';
  errorMessages: string[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,



    ) {
      this.buildForm();
    }



  ngOnInit(): void {
  }



  onSubmit(event: Event) {
    this.submitted = true;
    event.preventDefault();
    this.errorMessages = [];

    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.usersService.createUser(user).subscribe(
        (newUser: User) => {
          this.successMessage = 'Registro exitoso';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);
        },
        (error) => {
          console.log(error);
          if (error.status === 400 && error.error.msg) {
            this.errorMessages.push(error.error.msg);
          } else {
            this.errorMessages.push('El correo electrónico ya está registrado');
          }
        }
      );
    }else {
      this.errorMessages.push('Por favor, complete todos los campos');
    }
  }




  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email],],
      username: ['', [Validators.required],],
      password: ['', [Validators.required]],
      role: ['user', [Validators.required]],
    });
  }

}
