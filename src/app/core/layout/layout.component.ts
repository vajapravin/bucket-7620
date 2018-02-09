import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import * as fromRoot from '../../reducers/index';
import * as layout from './shared/layout.action';
import { Store } from '@ngrx/store';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MediaReplayService } from '../utils/media-replay.service';
import { MediaChange } from '@angular/flex-layout';
import Scrollbar from 'smooth-scrollbar';
import { ScrollbarComponent } from '../scrollbar/scrollbar.component';
import * as hopscotch from 'hopscotch';
import { CommonService } from '../../services/common.service';

@Component({
  selector: '.layout-w',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CommonService]
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {

  layout = "alpha";

  constructor(
    private mediaReplayService: MediaReplayService,
    private router: Router,
    private store: Store<fromRoot.State>,
    private cd: ChangeDetectorRef,
    private commonService: CommonService
  ) {
    this.commonService.propertyMarkerClicked.subscribe(
      (status: string) => this.toggleQuickDetail()
    )
  }

  ngOnInit() {
    this.store.select(fromRoot.getLayout).subscribe((layout) => {
      this.layout = layout;
    });
  }

  ngAfterViewInit() {
  }

  openSidenav() {
    this.store.dispatch(new layout.OpenSidenavAction());
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenavAction());
  }

  toggleSidenav() {
    this.store.dispatch(new layout.ToggleSidenavAction());
  }

  onActivate(): void {
  }

  ngOnDestroy() {

  }

  toggleQuickDetail() {

  }
}
