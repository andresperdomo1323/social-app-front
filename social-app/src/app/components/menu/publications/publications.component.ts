import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publication } from 'src/app/models/publications.models';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  mensaje: string = '';
  imagenes: string[] = [];

  publicacionesForm: FormGroup = new FormGroup({})


  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagenes.push(e.target.result);
      };
      reader.readAsDataURL(file);

    }
  }



  publicar() {
    // implementar la lógica para enviar el mensaje y las imágenes al servidor.
    // agregar la lógica para etiquetar personas.
    console.log('Mensaje:', this.mensaje);
    console.log('Imágenes:', this.imagenes);
  }

  constructor(
    private router: Router,
    private form: FormBuilder,
    private publicationService: PublicationsService
  ) { this.buildForm(); }

  private buildForm(){
    this.publicacionesForm=this.form.group({
      description:['', [Validators.required]]
    })
  }

  onSubmit(event:Event){
    event.preventDefault()
    if(this.publicacionesForm.valid){
      const publicaciones=this.publicacionesForm.value
      this.publicationService.createPublication(publicaciones)
      .subscribe((newPublication:Publication)=> {})
    }
    this.publicacionesForm.reset();
  }

  ngOnInit(): void {
  }

  perfil() {
    this.router.navigateByUrl('/menu/profile')
  }

}
