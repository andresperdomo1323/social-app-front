import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicaciones-guardadas-setting',
  templateUrl: './publicaciones-guardadas-setting.component.html',
  styleUrls: ['./publicaciones-guardadas-setting.component.css']
})
export class PublicacionesGuardadasSettingComponent {
  
  constructor(private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit(): void {
  }
}
