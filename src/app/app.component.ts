import { Component } from '@angular/core';
import { environment as env } from '../environments/environment';

@Component({
  selector: '[vr-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  ngOnInit(): void {
  }
  ngOnDestroy(): void {}
  onLoginClick() {}
  onLogoutClick() {}
}