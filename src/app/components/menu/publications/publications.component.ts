import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publication } from 'src/app/models/publications.models';
import { AuthGoogleService } from 'src/app/services/auth-google.service';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent {
  mensaje: string = '';
  imagenes: string[] = [];

  publicacionesForm: FormGroup = this.form.group({
    description:['']
  })

  constructor(
    private router: Router,
    private form: FormBuilder,
    private publicationService: PublicationsService,
    private authGoogleService: AuthGoogleService


  ) { this.buildForm(); }


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

  showData(){
  const data = JSON.stringify(this.authGoogleService.getProfile())
  console.log(data);
  }




  publicar() {
    // implementar la lógica para enviar el mensaje y las imágenes al servidor.
    // agregar la lógica para etiquetar personas.
    console.log('Mensaje:', this.mensaje);
    console.log('Imágenes:', this.imagenes);
  }

  onSubmit(event:Event){
    event.preventDefault()
    if(this.publicacionesForm.valid){
      const publicaciones=this.publicacionesForm.value
      this.publicationService.createPublication(publicaciones)
      .subscribe((newPublication:Publication)=> {
        console.log(newPublication);
        this.router.navigate(['./menu']);
      })
    }
    this.publicacionesForm.reset();
  }

  private buildForm(){
    this.publicacionesForm=this.form.group({
      description:['', [Validators.required]],
      typePublication:['texto', [Validators.required]],
    });
  }



  ngOnInit(): void {
  }

  perfil() {
    this.router.navigateByUrl('/menu/profile')
  }

}
