import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'vr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AuthService, CommonService]
})
export class DashboardComponent implements OnInit {

  constructor (
    private authService: AuthService,
    private commonService: CommonService,
    private localStorage: LocalStorageService
    ) {
    this.authService.validateToken('/');
  }

  ngOnInit() {
  }

}
