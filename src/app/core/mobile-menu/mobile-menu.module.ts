import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MobileMenuComponent } from './mobile-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [MobileMenuComponent],
  exports: [MobileMenuComponent]
})
export class MobileMenuModule {}