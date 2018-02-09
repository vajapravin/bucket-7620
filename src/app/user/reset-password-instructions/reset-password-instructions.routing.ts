import { Routes } from '@angular/router';
import { ResetPasswordInstructionsComponent } from './reset-password-instructions.component';

export const resetPasswordInstructionsRoutes: Routes = [
  {
    path: 'user/reset-password-instructions/:reset_password_token/:email',
    component: ResetPasswordInstructionsComponent
  }
];
