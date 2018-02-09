import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class AuthService {

  constructor(
    private _tokenService: Angular2TokenService
  ) {};

  login(user: User) {
    return this._tokenService.signIn({
      email: user.email,
      password: user.password
    })
  }

  register(user: User) {
    return this._tokenService.registerAccount({
      email:                user.email,
      password:             user.password,
      passwordConfirmation: user.password_confirmation,
      uid: user.uid
    })
  }

  isAuthenticated() {
    return this._tokenService.userSignedIn()
  }

  // logout user
  logout() {
    return this._tokenService.signOut();
  }

  // send reset password instructions for already user
  resetPassword(user: User) {
    return this._tokenService.resetPassword({
      email: user.email
    })
  }

  // update password for login user
  updatePassword(user: User) {
    return this._tokenService.updatePassword({
      password:             user.password,
      passwordConfirmation: user.password_confirmation,
      resetPasswordToken:   user.reset_password_token
    })
  }

  validateToken() {
    return this._tokenService.validateToken();
  }

  // update password for forgot password
  updateForgotPassword(user: User) {
    return this._tokenService.post('user/password', {
      password:             user.password,
      password_confirmation: user.password_confirmation,
      reset_password_token:   user.reset_password_token
    })
  }

  emailConfirmation(user: User) {
    return this._tokenService.post('user/confirm_email', {
      confirmation_token:   user.confirmation_token
    })
  }
}