import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN_KEY } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  baseUrl : string = 'https://localhost:7294/api/Auth';

  createUser(formData : any) {
    return this.http.post(this.baseUrl + '/signup', formData);
  }
  signIn(formData : any) {
    return this.http.post(this.baseUrl + '/signin', formData);
  }
  isLoggedIn() {
    return localStorage.getItem(TOKEN_KEY) != null ? true : false;
  }
  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }
  deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}
