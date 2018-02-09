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
  selector: 'vr-confirmation-instructions',
  templateUrl: './confirmation-instructions.component.html',
  styleUrls: ['./confirmation-instructions.component.scss'],
  animations: [...ROUTE_TRANSITION],
  providers: [AuthService, CommonService],
  host: { '[@routeTransition]': '' }
})
export class ConfirmationInstructionsComponent implements OnInit {

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
      this.user.confirmation_token = params['confirmation_token'];
    });

    this.commonService.setTitle('Email Confirmation | Thatch.ie');

    this.authService.emailConfirmation(this.user).subscribe(
      res => {
        this.dialog.closeAll();
        if(res.json().data.errors){
          this.snackBar.open(
            res.json().data.errors.join(', '),
            'Close', {
            duration: 3000
          });
        } else {
          this.snackBar.open(
            res.json().data.full_messages.join(', '),
            'Close', {
            duration: 5000
          });
        }
        this.commonService.redirectTo('/');
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