import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonLayoutComponent } from './common_layout.component';

import { MobileMenuModule } from '../../mobile-menu/mobile-menu.module';
import { DesktopMenuModule } from '../../desktop-menu/desktop-menu.module';
import { BreadcrumbsModule } from '../../breadcrumbs/breadcrumbs.module';
import { RightSidebarModule } from '../../right-sidebar/right-sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MobileMenuModule,
    DesktopMenuModule,
    BreadcrumbsModule,
    RightSidebarModule
  ],
  declarations: [CommonLayoutComponent],
  exports: [CommonLayoutComponent]
})
export class CommonLayoutModule { }
