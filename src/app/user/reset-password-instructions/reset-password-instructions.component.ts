import { AfterViewInit, Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { ROUTE_TRANSITION } from '../../app.animation';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { CommonService } from '../../services/common.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'vr-reset-password-instructions',
  templateUrl: './reset-password-instructions.component.html',
  styleUrls: ['./reset-password-instructions.component.scss'],
  animations: [...ROUTE_TRANSITION],
  providers: [AuthService],
  host: { '[@routeTransition]': '' }
})
export class ResetPasswordInstructionsComponent implements OnInit {

  project: any;
  user = new User();

  constructor(
    private router: Router,
    public dialog: MdDialog,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private snackBar: MdSnackBar,
    private authService: AuthService,
    private commonService: CommonService) {
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.authService.logout();
    }

    this.project = {
      background: 'linear-gradient(to left, #cbad6d, #d53369)',
      codename: 'Thatch.ie'
    }

    this.activatedRoute.params.subscribe((params: Params) => {
      this.user.email = params['email'];
      this.user.reset_password_token = params['reset_password_token'];
    });

    this.commonService.setTitle('Reset Password Instruction | Thatch.ie');
  }

  update_forgot_password() {
    this.authService.updateForgotPassword(this.user).subscribe(
      res => {
        this.dialog.closeAll();
        this.changeDetectorRef.detectChanges();
      },
      error => {
        this.snackBar.open(
          error.json().errors.join(', '),
          'Close', {
          duration: 3000
        });
      }
    );
  }
}
