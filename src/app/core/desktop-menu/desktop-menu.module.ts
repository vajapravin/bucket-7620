import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DesktopMenuComponent } from './desktop-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [DesktopMenuComponent],
  exports: [DesktopMenuComponent]
})

export class DesktopMenuModule {}