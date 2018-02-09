import { Component } from '@angular/core';
import { MediaReplayService } from './core/utils/media-replay.service';

import { environment as env } from '../environments/environment';

@Component({
  selector: '[vr-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  host = env.host;
  year = new Date().getFullYear();

  //noinspection JSUnusedLocalSymbols
  constructor(
    mediaReplay: MediaReplayService // workaround for Flex-Layout to receive the initial value
  ) {
    // Nothing here.
    // You probably want to go to /core/layout/ :)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onLoginClick() {
  }

  onLogoutClick() {
  }
}