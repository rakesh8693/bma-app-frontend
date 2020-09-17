import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Card } from './models/card';
import { Cardview } from './models/Cardview';
import { map, catchError } from 'rxjs/operators';
import { Group } from './models/Group';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseURL: string = "http://localhost:9090/";

  constructor(private http:HttpClient) { }

  public create(card:Card):Observable<any>{
    let userid=+sessionStorage.getItem('id');
    const headers=new HttpHeaders({Authorization: 'Basic '+btoa(this.getAuthToken()),'content-type': 'application/json'})
    const body=JSON.stringify(card);
    return this.http.post(this.baseURL + 'card/'+userid,body,{'headers':headers})
  }

  public get(){ 
    let userid=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    return this.http.get(this.baseURL + 'card/'+userid,{headers}).
        pipe(
           map((data: Cardview[]) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }

    public getCardsToValidate(group:Group){ 
      let userid=+sessionStorage.getItem('id');
      const headers = new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.getAuthToken()),
        'content-type': 'application/json'
      })
      let params = new HttpParams();
      params = params.append('groupCategory', group.groupCategory);
      params = params.append('groupName', group.groupname);
      return this.http.get(this.baseURL + 'validateCard/'+userid,{headers,params}).
          pipe(
             map((data: Cardview[]) => {
               return data;
             }), catchError( error => {
               return throwError( 'Something went wrong!' );
             })
          )
      }

  getAuthToken():string{
    let username = sessionStorage.getItem('userName');
    let password = sessionStorage.getItem('password');
    return username + ":" + password;
  }
}
