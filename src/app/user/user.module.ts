import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationInstructionsModule } from './confirmation-instructions/confirmation-instructions.module';
import { ResetPasswordInstructionsModule } from './reset-password-instructions/reset-password-instructions.module';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationInstructionsModule,
    ResetPasswordInstructionsModule
  ],
  declarations: []
})
export class UserModule { }
