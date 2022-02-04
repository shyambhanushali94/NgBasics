import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiLink: string = environment.url
  constructor(private http: HttpClient) { }

  getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiLink}/users/${id}`);
  }


  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/users`);
  }

  create(data: User): Observable<User> {
    return this.http.post<User>(`${this.apiLink}/users`, data);
  }

  update(id: number, data: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiLink}/${id}`);
  }
}
