export class Role {
  id: number;
  name: string;
  _destroy: boolean;

  constructor(model: any = null){
    this.id = model.id;
    this.name = model.name;
    if(model._destroy) { this._destroy = model._destroy; }
  }
}