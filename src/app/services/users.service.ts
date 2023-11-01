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
  ) { }

    createUser(user: User) {
      return this.http.post<User>(this.url, user );
    }


    login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.url}/login`, { email, password });
    }

   
    checkUsername(username: string): Observable<boolean> {
      return this.http.get<boolean>(this.url,{params:{username}});
    }

    getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(`${this.url}/getUsers`);
    }

    getUserData(id:string): Observable<any> {
      return this.http.get<any>(`${this.url}/${id}`);
    }

    updateUser(id:string, user:User): Observable<any> {
      return this.http.put<any>(`${this.url}/${id}`, user);
    }

}
