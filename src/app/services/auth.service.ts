import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { LocalStorageService } from 'ngx-webstorage';
import { CommonService } from './common.service';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private commonService: CommonService
  ) {};

  login(user: User) {
    let url = env.api_url + "/users/sign_in.json";
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(url, { user: user }, { headers: headers, observe: 'response' });
  }

  register(user: User) {
  }

  isAuthenticated() {
  }

  // logout user
  logout() {
    this.localStorage.store('current_user', null);
    this.localStorage.store('auth', null);
    this.commonService.redirectTo('/login');
  }

  // send reset password instructions for already user
  resetPassword(user: User) {
  }

  // update password for login user
  updatePassword(user: User) {
  }

  validateToken(path: string) {
    if(!this.hasSignedIn()) { return this.commonService.redirectTo('/login'); }
    let url = env.api_url + "/users/validate_token.json";
    this.http.get(url, { headers: this.authHeaders() }).subscribe(
      data => {
        if(data['success']) { this.commonService.redirectTo(path) }
        else { this.commonService.redirectTo('/login') }
      },
      error => {
        this.commonService.redirectTo('/login');
      }
    );
  }

  // update password for forgot password
  updateForgotPassword(user: User) {
  }

  emailConfirmation(user: User) {
  }

  getProfile(): User {
    return <User>this.localStorage.retrieve('current_user');
  }

  authHeaders(): HttpHeaders {
    let headers;
    if(this.hasSignedIn()){
      headers = new HttpHeaders().append('Content-Type', 'application/json')
        .append('Authorization', this.localStorage.retrieve('auth'));
    } else {
      headers = new HttpHeaders().append('Content-Type', 'application/json');
    }
    return headers;
  }

  hasSignedIn(): boolean {
    return this.localStorage.retrieve('current_user') ? true : false;
  }

}