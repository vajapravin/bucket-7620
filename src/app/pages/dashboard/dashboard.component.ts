import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'vr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
