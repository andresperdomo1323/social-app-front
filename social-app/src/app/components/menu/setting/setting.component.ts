import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  type: any;
  @ViewChild('tabGroup')tabGroup!: MatTabGroup ;
  formS = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passwordc: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    phone: ['', [Validators.required]]
  });


  constructor(private formBuilder: FormBuilder, private router:Router, private actRoute: ActivatedRoute) {
    this.type = this.actRoute.snapshot.params['type'];
  }

  ngAfterViewInit(): void {
    if(this.type > 0){
      this.tabGroup.selectedIndex = Number(this.type);
    }
  }

  ngOnInit(): void {
  }


  cambiarFoto() {
    // Poner aca el metodo para que el usuario pueda cambiar la foto de perfil
  }
}
