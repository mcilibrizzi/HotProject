import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../user";
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private baseUrl : string = "http://localhost:3000/users";

  constructor(private http:HttpClient) { }


  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);

  } 

  getUserDetail(userID:string){
    return this.http.get<User>(this.baseUrl + "/"+userID);

  }
}
