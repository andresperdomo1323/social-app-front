import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/api/users';
  private headerCustom: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient,


    ) {
    }

    createUser(user: User) {
      return this.http.post<User>(this.url, user );
    }


    login(form: any) {
      return this.http.post<any>(`${this.url}/login`,form);
    }

    getById(id: string) {
      return this.http.get<User>(`${this.url}/${id}`);
    }

    checkUsername(username: string): Observable<boolean> {
      return this.http.get<boolean>(this.url,{params:{username}});
    }




}
