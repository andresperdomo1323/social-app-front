import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from '../models/user.models';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient,
    ) {
    }

    createUser(user: User) {
      return this.http.post<User>(this.url, user );
    }

    getAll(){
      return this.http.get<User[]>(this.url);
    }

    getEmails(email: string) {
      return this.http.get(this.url + `?email=${email}`);
    }

    login(form: any) {
      return this.http.post<any>(`${this.url}/login`,form);
    }



}
