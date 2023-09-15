import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;

  form = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');

      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;

        // Ahora puedes usar email y password para realizar la lógica de inicio de sesión
        // ...
      }
    }
  }

  get fc() {
    return this.form.controls;
  }
}
