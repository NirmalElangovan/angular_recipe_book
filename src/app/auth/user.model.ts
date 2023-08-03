export class User{
  constructor(
    public email: string,
    public id: string,
    public _token: string,
    private _tokExpirationDate: Date,
    ){

  }

  get token(){
    if(!this._tokExpirationDate ||
      new Date() > this._tokExpirationDate){
        return null;
    }
    return this._token

  }
}
