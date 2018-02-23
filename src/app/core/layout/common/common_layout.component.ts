import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import * as fromRoot from '../../../reducers/index';
import * as layout from './../shared/layout.action';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange } from '@angular/flex-layout';
import Scrollbar from 'smooth-scrollbar';
import * as hopscotch from 'hopscotch';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: '.layout-w',
  templateUrl: './common_layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommonService]
})
export class CommonLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  layout = "";

  alreadyLogin: boolean;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private commonService: CommonService
  ) {

  }

  ngOnInit() {
    this.store.select(fromRoot.getAlreadyLogin).subscribe((alreadyLogin) => {
      this.alreadyLogin = alreadyLogin;
    })

    this.store.select(fromRoot.getLayout).subscribe((layout) => {
      this.layout = layout;
    });
  }

  ngAfterViewInit() {
  }

  onActivate(): void {
  }

  ngOnDestroy() {

  }

  toggleQuickDetail() {

  }
}
