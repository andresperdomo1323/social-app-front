import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;

  form : FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // You can perform additional initialization here if needed
  }

  onSubmit() {
    // if (this.for) {
    //   const usernameControl = this.loginForm.get('username');
    //   const passwordControl = this.loginForm.get('password');

    //   if (usernameControl && passwordControl) {
    //     const username = usernameControl.value;
    //     const password = passwordControl.value;

    //     // Now you can use username and password
    //     // ...perform your login logic here
    // //   }
    // }
  }

  get fc(){
    return this.form.controls
  }
}
