import { Profile } from './profile.model';
import { Role } from './role.model';

export class User {
  email: string;
  identifier: string;
  password: string;
  password_confirmation: string;
  confirmation_token: string;
  reset_password_token: string;
  amount: number;
  profile_attributes: Profile;
  roles: Role[];

  constructor(model: any = null, auth: any = null){
    if(model){
      this.email = model.email;
      this.password = model.password;
      this.password_confirmation = model.password_confirmation;
      this.reset_password_token = model.reset_password_token;
      this.confirmation_token = model.confirmation_token;
      this.amount = model.amount;
      this.profile_attributes = model.profile_attributes || model.profile;
      this.roles = model.roles;
    }
  }

  fullname() {
    if(this.profile_attributes) {
      return this.profile_attributes.first_name + " " + this.profile_attributes.last_name
    }
  }
}