import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn  } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from '../../../models/user.models';
import { Router } from '@angular/router';
<<<<<<< HEAD:src/app/components/login/register/register.component.ts
import { async, map, tap } from 'rxjs';
import { validateUsername } from 'src/app/validators/validator';
=======

>>>>>>> 13d05bd56400512177fa25ad1b2e54a8816e4214:social-app/src/app/components/login/register/register.component.ts

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  userForm: FormGroup = new FormGroup({});



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
    if(this.userForm.valid){
      const user = this.userForm.value;
      this.usersService.createUser(user)
      .subscribe((newUser: User) => {
        console.log(newUser);
        this.router.navigate(['./login']);
      })
    }

    this.userForm.reset();

  }




  private buildForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email],],
      username: ['', [Validators.required],validateUsername(this.usersService)],
      password: ['', [Validators.required]],
      role: ['user', [Validators.required]],
    });
  }

}


