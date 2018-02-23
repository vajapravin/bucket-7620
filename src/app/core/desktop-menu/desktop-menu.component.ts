import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: '.desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  providers: [AuthService]
})

export class DesktopMenuComponent implements OnInit {
  constructor(
    private authService: AuthService) {
  }
  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}