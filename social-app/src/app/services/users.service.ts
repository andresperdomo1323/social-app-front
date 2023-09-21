import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) { }



}
