export class Address {
  identifier: string;
  street: string;
  city: string;
  zip: number;
  country: string;
  state: string;
  lat: number;
  lng: number;

  constructor(model: any = null){
    this.identifier = model.identifier;
    this.street = model.street;
    this.city = model.city;
    this.zip = model.zip;
    this.country = model.country;
    this.state = model.state;
    this.lat = model.lat;
    this.lng = model.lng;
  }
}