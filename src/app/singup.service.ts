import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  baseURL = 'http://localhost:9090/';

  constructor(private http: HttpClient) { }

  public create(user: User): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'user', body, { 'headers': headers });
  }
}
