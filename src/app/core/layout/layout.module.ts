import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdIconModule, MdRippleModule, MdSidenavModule } from '@angular/material';
import { LayoutComponent } from './layout.component';
// import { ScrollbarModule } from '../scrollbar/scrollbar.module';
// import { TourModule } from '../tour/tour.module';
// import { SettingsModule } from 'app/core/settings/settings.module';
// import { SidenavModule } from '../sidenav/sidenav.module';
// import { ToolbarModule } from '../toolbar/toolbar.module';
// import { QuickpanelModule } from '../quickpanel/quickpanel.module';
// import { QuickDetailModule } from '../quickdetail/quickdetail.module';

import { MobileMenuModule } from '../mobile-menu/mobile-menu.module';
import { DesktopMenuModule } from '../desktop-menu/desktop-menu.module';
import { BreadcrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { RightSidebarModule } from '../right-sidebar/right-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdIconModule,
    MdRippleModule,
    MdButtonModule,
    // ScrollbarModule,
    // TourModule,
    // SidenavModule,
    // SettingsModule,
    // ToolbarModule,
    // QuickpanelModule,
    // QuickDetailModule,
    MobileMenuModule,
    DesktopMenuModule,
    BreadcrumbsModule,
    RightSidebarModule
  ],
  declarations: [LayoutComponent],
  exports: [LayoutComponent]
})
export class LayoutModule { }
