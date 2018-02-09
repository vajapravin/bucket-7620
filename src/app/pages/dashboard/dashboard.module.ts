import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MdIconModule,
    MdTabsModule,
    MdButtonModule,
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
