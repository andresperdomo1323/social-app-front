import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/api/users';


  constructor(
    private http: HttpClient,
    ) {
    }

    createUser(user: any) {
      return this.http.post<User>(this.url, user );
    }

    getAll(){
      return this.http.get<User[]>(this.url);
    }

    login(form: any) {
      return this.http.post<any>(`${this.url}/login`,form);
    }


}
