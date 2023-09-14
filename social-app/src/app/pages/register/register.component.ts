import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class RegisterComponent implements OnInit {

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get name() {
    return this.registerForm.get('name') as FormControl;
  }
  get username() {
    return this.registerForm.get('username') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get password2() {
    return this.registerForm.get('password2') as FormControl;
  }

  registerForm = new FormGroup({
  'email': new FormControl('', [Validators.required, Validators.email]),
  'name': new FormControl('', Validators.required),
  'username': new FormControl('', Validators.required),
  'password': new FormControl('', Validators.required),
  'password2': new FormControl('', Validators.required),



  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
