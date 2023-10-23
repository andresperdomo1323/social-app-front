import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/services/upload.service';
import { Upload } from '../../../models/upload.models';


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

  imageUrl: string  = ''; // Para almacenar la URL de la imagen

  selectedFile: File | undefined;
  uploadedImage: Upload | undefined;


  constructor(private formBuilder: FormBuilder, private router:Router, private actRoute: ActivatedRoute, private http: HttpClient, private uploadService: UploadService) {
    this.type = this.actRoute.snapshot.params['type'];
  }

  ngAfterViewInit(): void {
    if(this.type > 0){
      this.tabGroup.selectedIndex = Number(this.type);
    }
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result; // Asignar la URL de la imagen al src de la etiqueta img
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadProfilePicture() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('avatar', this.selectedFile);

      this.uploadService.uploadFile({
        url: '',
        filename: this.selectedFile.name
      }).subscribe(
        (response: Upload) => {
          console.log('Imagen subida exitosamente', response);
          this.uploadedImage = response;
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

}
