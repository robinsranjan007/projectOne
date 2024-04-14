export interface formsdetails{
  id?:string
  firstName: string,
  lastName: string,
  title: string,
  email: string,
  country: string,
  character: string,
  message: string,
}

export interface signUp{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    kind:string,
   
}
export interface FormsDetailsResponse {
  [key: string]: formsdetails;
}

export interface loginup extends signUp{
  registered:boolean
}


