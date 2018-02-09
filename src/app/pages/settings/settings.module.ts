import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdChipsModule, MdIconModule, MdTabsModule } from '@angular/material';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';
import { PageHeaderModule } from '../../core/page-header/page-header.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    PageHeaderModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdChipsModule,
    BreadcrumbsModule
  ],
  declarations: [SettingsComponent, ChangePasswordComponent, ProfileComponent]
})

export class SettingsModule { }