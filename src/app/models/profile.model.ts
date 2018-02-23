import { Address } from './address.model';

export class Profile {
  first_name: string;
  last_name: string;
  identifier: string;
  address_attributes: Address;

  constructor(model: any = null){
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.identifier = model.identifier;
    this.address_attributes = model.address_attributes
  }
}