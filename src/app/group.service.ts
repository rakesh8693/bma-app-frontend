import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import { Cardview } from './models/Cardview';
import { Group } from './models/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  baseURL: string = "http://localhost:9090/";

  constructor(private http:HttpClient) { }

  public addToGroup(cardId,group:Group): Observable<any>{
    group.userid=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    const body=JSON.stringify(group);
    return this.http.post(this.baseURL + 'group/'+cardId, body,{'headers':headers})
  }
  
  public createGroup(group:Group): Observable<any>{
    group.userid=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    const body=JSON.stringify(group);
    return this.http.post(this.baseURL + 'group', body,{'headers':headers})
  }

  public updateCard(id:Number,card:Card): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    const body=JSON.stringify(card);
    return this.http.put(this.baseURL + 'card/'+id, body,{'headers':headers})
  }

  public getCardByGroupCategory(group:Group): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    return this.http.get(this.baseURL + 'group/'+group.groupCategory+"/card/"+group.groupname,{'headers':headers})
  }

  public getCardToValidate(group:Group): Observable<any>{
    let userid=+sessionStorage.getItem('id');
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    let params = new HttpParams();
    params = params.append('groupCategory', group.groupCategory);
    params = params.append('groupName', group.groupname);
    return this.http.get(this.baseURL + 'validateCard/'+userid,{headers,params})
  }

  public get(groupCategory): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.getAuthToken()),
      'content-type': 'application/json'
    })
    return this.http.get(this.baseURL + 'groupNames/'+groupCategory,{'headers':headers})
  }

  getAuthToken():string{
    let username = sessionStorage.getItem('userName');
    let password = sessionStorage.getItem('password');
    return username + ":" + password;
  }
}
