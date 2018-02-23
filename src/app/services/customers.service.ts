import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Observable } from "rxjs/Rx"

@Injectable()
export class CustomersService {
  constructor(
    private router: Router,
    private location: Location,
    private http: HttpClient,
    private authService: AuthService
  ) {
  };

  fetchCustomers(): Observable<User[]>{
    let url = environment.api_url + '/customers.json';
    return <Observable<User[]>>this.http.get(url, { headers: this.authService.authHeaders() });
  }

  fetchExecutives(): Observable<User[]>{
    let url = environment.api_url + '/executives.json';
    return <Observable<User[]>>this.http.get(url, { headers: this.authService.authHeaders() });
  }
}