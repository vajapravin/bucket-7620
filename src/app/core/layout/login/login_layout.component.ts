import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild,
  Renderer
} from '@angular/core';
import * as fromRoot from '../../../reducers/index';
import * as layout from './../shared/layout.action';
import { DOCUMENT } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MediaChange } from '@angular/flex-layout';
import Scrollbar from 'smooth-scrollbar';
import * as hopscotch from 'hopscotch';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: '.all-wrapper.menu-side.with-pattern',
  templateUrl: './login_layout.component.html',
  styleUrls: ['./login_layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommonService]
})
export class LoginLayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  layout$: Observable<string>;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private commonService: CommonService,
    private renderer: Renderer
  ) {
    this.renderer.setElementClass(document.body, 'auth-wrapper', true);
  }

  ngOnInit() {
    this.layout$ = this.store.select(fromRoot.getLayout);
  }

  ngAfterViewInit() {
  }

  onActivate(): void {
  }

  ngOnDestroy() {
    this.renderer.setElementClass(document.body, 'auth-wrapper', false);
  }

  toggleQuickDetail() {

  }
}
