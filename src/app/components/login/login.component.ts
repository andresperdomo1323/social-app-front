import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
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
    private router: Router
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
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');

      if (emailControl && passwordControl) {
        const email = emailControl.value;
        const password = passwordControl.value;


      //   const res = this.usersService.login(this.form.value)
      //   .subscribe((res: any) => {
          
      //     const resStr = JSON.stringify(res.data);

      // localStorage.setItem('user', resStr);
      //     localStorage.setItem('token', res.token);
      //   });
        this.router.navigateByUrl('/menu')
      }
    }
    this.form.reset();
  }
 

  get fc() {
    return this.form.controls;
  }

  register(){
    this.router.navigateByUrl('/register')
  }


}
