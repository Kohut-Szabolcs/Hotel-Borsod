import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment1 } from './environment1';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login(userData:any){ 
      return this.http.post(Environment1.baseUrl+"user/login",userData)
    }
}
