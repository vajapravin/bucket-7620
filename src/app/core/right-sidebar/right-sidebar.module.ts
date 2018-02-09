import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RightSidebarComponent } from './right-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [RightSidebarComponent],
  exports: [RightSidebarComponent]
})

export class RightSidebarModule {}