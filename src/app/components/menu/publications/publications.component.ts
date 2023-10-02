import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {

  constructor( private router:Router) {}

  ngOnInit(): void {
  }

  perfil(){
    this.router.navigateByUrl('/menu/profile')
  }

}
