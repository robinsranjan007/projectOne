import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginup, signUp } from './formdata.service';
import { Subject, catchError, throwError, tap, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  user = new BehaviorSubject<User | null>(null);
  private tokenExpireTimer:any;

  signUp(email: string, password: string) {
    let data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http
      .post<signUp>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAAlutj6FWDmIqpQM-5e0AwGEu39FCdpg',
        data
      )
      .pipe(
        catchError((err) => {
          let errorMessage = 'An unknow error has occured';
          if (!err.error || !err.error.error) {
            return throwError(() => errorMessage);
          }
          switch (err.error?.error?.message) {
            case 'INVALID_EMAIL':
              errorMessage = 'Please enter the valid email';
              break;
            case 'EMAIL_EXISTS':
              errorMessage =
                'The email address is already in use by another account.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = ' Password sign-in is disabled for this project.';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage =
                'We have blocked all requests from this device due to unusual activity. Try again later.';
          }

          return throwError(() => errorMessage);
        }),

        tap((res) => {
          console.log('are you getting the response', res);
          this.createUser(res);
        })
      );
  }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http
      .post<loginup>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAAlutj6FWDmIqpQM-5e0AwGEu39FCdpg',
        data
      )
      .pipe(
        catchError((err) => {
          return this.handleError(err);
        }),
        tap((res) => {
          this.createUser(res);
          console.log('are you getting the response', res);
        })
      );
  }


  autoLogout(expireTime:number)
  {
   this.tokenExpireTimer = setTimeout(()=>{
    console.log('hi i am being called')
      this.logout()
    },expireTime)
  
  }

  autologin() {
    const userDataString = localStorage.getItem('users');    
    if (!userDataString) return;
    const userData = JSON.parse(userDataString);
    const {email,id,_token,expiresIn}= userData
    const loggeduser = new User(
     email,id,_token,expiresIn
    )
    if(loggeduser.Token)
      {
        this.user.next(loggeduser)
      }
      const timeValue = userData.expiresIn.getTime() - new Date().getTime()
      this.autoLogout(timeValue)
  }

  private createUser(res: signUp) {
    const expiresInts = new Date().getTime() + +res.expiresIn * 1000;
    const expiresIn = new Date(expiresInts);

   const {email,localId,idToken}=res

    const users = new User( email,localId,idToken,expiresIn);
    this.user.next(users);
    localStorage.setItem('users', JSON.stringify(users));
    this.autoLogout(+res.expiresIn*1000)
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['signup']);
    localStorage.removeItem('users')
    if(this.tokenExpireTimer)
      {
        clearTimeout(this.tokenExpireTimer)
      }
    this.tokenExpireTimer = null;
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!err.error.error || !err.error.error.message) {
      return throwError(() => errorMessage);
    }
    switch (err.error.error.message) {
      case 'INVALID_EMAIL':
        errorMessage = 'please enter the correct email address';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Please enter correct login credentials.';
        break;
      default:
        errorMessage = 'something went wrong';
    }
    return throwError(() => errorMessage);
  }
}
