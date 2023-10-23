import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Upload } from '../models/upload.models';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private uploadUrl = 'http://localhost:3000/api/upload';

  constructor(private http: HttpClient) {}

  uploadFile(upload: Upload) {
    return this.http.post<any>(`${this.uploadUrl}/uploadAvatar`, upload);
  }
}
