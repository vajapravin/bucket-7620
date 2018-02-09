import { Routes } from '@angular/router';
import { ConfirmationInstructionsComponent } from './confirmation-instructions.component';

export const confirmationInstructionsRoutes: Routes = [
  {
    path: 'user/confirmation-instructions/:confirmation_token',
    component: ConfirmationInstructionsComponent
  }
];
