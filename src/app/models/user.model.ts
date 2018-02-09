export class User {
  email: string;
  username: string;
  password: string;
  password_confirmation: string;
  confirmation_token: string;
  uid: string;
  reset_password_token: string;

  constructor(model: any = null){
    if(model){
      this.email = model.email;
      this.username = model.username;
      this.uid = model.uid;
      this.password = model.password;
      this.password_confirmation = model.password_confirmation;
      this.reset_password_token = model.reset_password_token;
      this.confirmation_token = model.confirmation_token;
    }
  }
}