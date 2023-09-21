import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { User } from '../../models/user.models';
import { Router } from '@angular/router';




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
    private registerService: RegisterService,
    private router: Router

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
      this.registerService.createUser(user)
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
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['user', [Validators.required]],
    });
  }

}
