import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { Response } from '@angular/http';

import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'vr-login',
  templateUrl: './login.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AuthService, CommonService]
})
export class LoginComponent implements OnInit {
  user: User;

  constructor (
    private authService: AuthService,
    private commonService: CommonService,
    private localStorage: LocalStorageService
    ) {
    this.user = new User();
  }

  ngOnInit() {
    this.authService.validateToken('/');
  }

  onSubmit() {
    this.authService.login(this.user).subscribe(
      data => {
        this.localStorage.store('current_user', data.body);
        this.localStorage.store('auth', "Bearer " + data.headers.get('Ally-Auth-Token'));
        this.commonService.redirectTo('/');
      },
      error => {
        this.commonService.redirectTo('/login');
      }
    );
  }
}
