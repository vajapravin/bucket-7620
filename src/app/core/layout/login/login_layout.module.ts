import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginLayoutComponent } from './login_layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
  ],
  declarations: [LoginLayoutComponent],
  exports: [LoginLayoutComponent]
})
export class LoginLayoutModule { }
