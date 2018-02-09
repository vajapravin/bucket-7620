import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'vr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
