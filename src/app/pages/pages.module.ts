import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    UsersModule
  ],
  declarations: []
})
export class PagesModule { }
