import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  baseUrl : string = 'https://localhost:7294/api/Auth';

  createUser(formData : any) {
    return this.http.post(this.baseUrl + '/signup', formData);
  }
}
