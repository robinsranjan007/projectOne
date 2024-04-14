import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable, Subject, exhaustMap, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    
  constructor(private authservice: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.authservice.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user || !user.Token) {
            console.log('i am not being called')
           return next.handle(req)
        }
        console.log(' i am being called')
        const modifiedreq = req.clone({
          params: new HttpParams().set('auth', user?.Token),
        });
        return next.handle(modifiedreq);
      })
    );
 
  }
}
