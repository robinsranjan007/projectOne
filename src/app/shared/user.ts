export class User{


constructor(public email:string,public Id:string,private _token:string,private _expiresIn:Date){}


get Token()
{
    if(!this._token || this._expiresIn< new Date())
        {
            return null;
        }
    else
    {
          return this._token;
    }
}


}