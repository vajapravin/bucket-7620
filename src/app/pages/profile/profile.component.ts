import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vr-profile',
  templateUrl: './profile.component.html',
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [AuthService, CommonService]
})
export class ProfileComponent implements OnInit {
  identifier: string;

  constructor (
    private authService: AuthService,
    private commonService: CommonService,
    private localStorage: LocalStorageService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.identifier = params['identifier'];
      this.authService.validateToken('/users/' + this.identifier + '/profile');
    });
  }

  ngOnDestroy() {

  }

}
