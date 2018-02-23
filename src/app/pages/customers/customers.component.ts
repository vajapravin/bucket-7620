import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';
import { CustomersService } from '../../services/customers.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Profile } from '../../models/profile.model';
import { Address } from '../../models/address.model';
import { Role } from '../../models/role.model';
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'vr-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' },
  providers: [CustomersService, AuthService]
})
export class CustomersComponent implements OnInit {
  users$: Observable<User[]>;
  executives$: Observable<User[]>;

  constructor(
    private authService: AuthService,
    private customersService: CustomersService) {
    this.authService.validateToken('/customers');
  }

  ngOnInit() {
    this.users$ = this.customersService.fetchCustomers();
    this.executives$ = this.customersService.fetchExecutives();
  }

}
