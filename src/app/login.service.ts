import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    let params = new HttpParams();
    params = params.append('userName', username);
    params = params.append('password', password);
    return this.http.get<User>(this.baseURL + 'users/login', { headers, params });
  }
}
