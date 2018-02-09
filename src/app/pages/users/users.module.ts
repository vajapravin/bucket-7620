import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdButtonModule, MdIconModule, MdTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';

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
    UsersComponent
  ]
})
export class UsersModule { }
