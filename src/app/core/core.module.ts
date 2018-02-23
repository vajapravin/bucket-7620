import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutModule } from './layout/common/common_layout.module';
import { LoginLayoutModule } from './layout/login/login_layout.module';

@NgModule({
  imports: [
    CommonModule,
    CommonLayoutModule,
    LoginLayoutModule
  ],
  providers: []
})
export class CoreModule { }
