import { Action } from '@ngrx/store';

export const ALREADY_LOGIN = '[Layout] User Login';
export const LOGIN_LAYOUT = '[Layout] Login Layout';

export class UserLoginAction implements Action {
  readonly type = ALREADY_LOGIN;
}

export class LoginLayoutAction implements Action {
  readonly type = LOGIN_LAYOUT;
}

export type Actions
  = UserLoginAction |
  LoginLayoutAction;
