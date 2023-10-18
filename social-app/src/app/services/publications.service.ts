import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../models/publications.models';


@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private url = 'http://localhost:3000/api/publications';

  constructor(private http:HttpClient) { }

  createPublication( publication:Publication ){
    return this.http.post<Publication>(this.url,publication)
  }
}
