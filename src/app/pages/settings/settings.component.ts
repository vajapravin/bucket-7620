import { Component, OnInit } from '@angular/core';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'vr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
