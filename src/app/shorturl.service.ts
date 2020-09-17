import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Shorturl } from './models/shorturl';
import { Shorturlview } from './models/shorturlview';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {

  baseURL: string = "http://localhost:9090/";

  constructor(private http: HttpClient) { }

  public create(shorturl: Shorturl): Observable<any> {    
    shorturl.userId=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    const body = JSON.stringify(shorturl);
    return this.http.post(this.baseURL + 'shortUrl', body, { 'headers': headers })
  }

  public get(){ 
    let userid=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    return this.http.get(this.baseURL + 'shortUrl/'+userid,{headers}).
        pipe(
           map((data: Shorturlview[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

  public share(id:number): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
    })
    return this.http.get(this.baseURL + 'shareShortUrl/'+id,{headers,responseType: 'text'})
  }  

  getAuthToken():string{
    let username = sessionStorage.getItem('userName');
    let password = sessionStorage.getItem('password');
    return username + ":" + password;
  }
    
}
