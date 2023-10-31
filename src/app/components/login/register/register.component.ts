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



  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,



    ) {
      this.buildForm();
    }



  ngOnInit(): void {
  }

  // onSubmit(event: Event) {
    // this.submitted = true;
    // event.preventDefault();
    // if(this.userForm.valid){
    //   const { email, password, name, lastName, role, username } = this.userForm.value;

    //   this.usersService.loginCreateFirebase(email, password)
    //     .then((userCredential) => {
    //       if (userCredential.user){
    //         let user = {
    //           uid: userCredential.user.uid,
    //           name: name,
    //           lastName: lastName,
    //           username: username,
    //           email: email,
    //           password:  password,
    //           role: role
    //         };
    //       }
          // User registered successfully, now save the user in MongoDB



  onSubmit(event: Event) {
    this.submitted = true;
    event.preventDefault();
    if(this.userForm.valid){
      const user = this.userForm.value;
      this.usersService.createUser(user)
      .subscribe((newUser: User) => {
        console.log(newUser);
        this.router.navigate(['/']);
      })
    }

    this.userForm.reset();

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


