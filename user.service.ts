import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  login(userData:any){ 
    return this.http.post(Environment.baseUrl+"user/login",userData)
  }
  register(userData:any){ 
    return this.http.post(Environment.baseUrl+"user/register",userData)
  }
}
